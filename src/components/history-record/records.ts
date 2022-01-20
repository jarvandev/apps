import BigNumber from 'bignumber.js';
import { getUnixTime } from 'date-fns';
import { useEffect, useState } from 'react';
import { useAccount, useApi } from '../../hooks';
import { AccountRecordListRes, AccountStatus } from '../../model';
import { rxPost } from '../../utils';

enum ApiPath {
  bonded = '/wallet/bond_list',
  unbonding = '/wallet/bond_list',
  map = '/wallet/mapping_history',
}

export const processTime = (start: number, expire: number): number => {
  const now = getUnixTime(new Date());
  const end = getUnixTime(expire);

  return end <= now ? 100 : 100 - ((end - now) / (end - getUnixTime(start))) * 100;
};

export function ringToKton(value: string | number, month: number): string {
  return (
    new BigNumber(value)
      // eslint-disable-next-line no-magic-numbers
      .times(new BigNumber(67 / 66).pow(month).minus(1))
      // eslint-disable-next-line no-magic-numbers
      .div(new BigNumber(1970))
      .integerValue()
      .toString()
  );
}

export function useRecords(status: AccountStatus, locked = false) {
  const { account } = useAccount();
  const { network } = useApi();
  const [data, setData] = useState<AccountRecordListRes>({ count: 0, list: [] });
  const [pagination, setPagination] = useState({ pageSize: 10, current: 1 });
  useEffect(() => {
    if (!account) {
      return;
    }

    const url = `https://${network.name}.webapi.subscan.io/api${ApiPath[status]}`;
    const { pageSize: row, current } = pagination;
    const sub$$ = rxPost<AccountRecordListRes>({
      url,
      params: {
        page: current - 1,
        locked: status === 'bonded' ? Number(locked) : 0,
        status,
        row,
        address: account,
      },
    }).subscribe((res) => {
      setData(res);
    });

    return () => {
      sub$$?.unsubscribe();
    };
  }, [account, status, locked, network.name, pagination]);

  return { data, pagination, setPagination };
}