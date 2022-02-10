import { Alert, Button, Card, Col, Row, Tabs } from 'antd';
import { useTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { readStorage, updateStorage } from '../utils';

function Content({
  img,
  product,
  description,
  url,
}: {
  img: string;
  product: string;
  description: string;
  url: string;
}) {
  return (
    <Col span={7}>
      <Card
        bordered={false}
        style={{ minHeight: 250 }}
        className="cursor-pointer hover:scale-105 hover:shadow-lg transform transition-all duration-200"
      >
        <div onClick={() => window.open(url, '_blank')} className="flex flex-col gap-4 items-center">
          <img src={`/image/${img}`} style={{ height: 70 }} />
          <b className="fond-bold text-lg">{product}</b>
          <p>{description}</p>
        </div>
      </Card>
    </Col>
  );
}

function Page() {
  const { t } = useTranslation();
  const hidePortalWarning = !!readStorage().hidePortalWarning;

  return (
    <div className="px-8">
      {!hidePortalWarning && (
        <Alert
          message={t(
            'The links in the Darwinia Portal are provided as a convenience and for informational purposes only; Darwinia Apps bears no responsibility for the accuracy, legality, security or content of the external sites linked or for that of subsequent links. For any questions or comments surrounding any of the projects listed, please contact corresponding projects directly.'
          )}
          type="warning"
          closable
          showIcon
          closeText={
            <Button size="small" type="link">
              {t('I known')}
            </Button>
          }
          onClose={() => {
            updateStorage({ hidePortalWarning: true });
          }}
          className="m-8"
        />
      )}

      <Tabs accessKey="overview" className="px-8 w-full mx-auto dark:shadow-none dark:border-transparent">
        <Tabs.TabPane tab={t('overview')} key="overview" className="pb-8">
          <Row justify="space-between">
            <Content
              img="polkadot.svg"
              product={'polkadot{.js}'}
              description={t(
                'A wallet built on the polkadot-js stack. This version is updated alongside any changes to the code and always has the latest features.'
              )}
              url="https://polkadot.js.org/apps"
            />

            <Content
              img="darwinia.png"
              product={'Wormhole'}
              description={t(
                'Cross-chain transfer of assets between multiple networks can be realized through Wormhole.'
              )}
              url="https://wormhole.darwinia.network/"
            />

            <Content
              img="darwinia.png"
              product={'Smart App'}
              description={t(
                'Projects in the Ethereum ecosystem can be easily migrated to the Darwinia network through Smart App.'
              )}
              url="https://smart.darwinia.network/"
            />
          </Row>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export const Portal = withRouter(Page);
