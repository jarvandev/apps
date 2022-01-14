import { svgIconFactory } from './icon-factory';

function Icon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.3"
        d="M12.2174 10.0696C10.2011 9.29208 7.96736 8.32426 7.78258 7.72074V7.09003C8.23249 6.60342 8.55543 6.01326 8.72279 5.37189C8.83725 5.2905 8.93376 5.18637 9.0062 5.06602C9.07864 4.94566 9.1255 4.81166 9.14386 4.67237C9.16222 4.53308 9.15166 4.3915 9.11288 4.25647C9.0741 4.12144 9.00796 3.99585 8.9185 3.88756V2.45759C8.9185 1.00043 8.1087 0 6.25 0C4.3913 0 3.5815 1.00043 3.5815 2.45759V3.87125C3.49204 3.97954 3.42583 4.10512 3.38705 4.24016C3.34827 4.37519 3.33778 4.51677 3.35614 4.65606C3.3745 4.79534 3.42136 4.92935 3.4938 5.04971C3.56624 5.17006 3.66268 5.27418 3.77715 5.35558C3.94237 5.99779 4.26558 6.58845 4.71735 7.07372V7.70443C4.53257 8.30795 2.29892 9.27577 0.282619 10.0533C0.199146 10.0869 0.127584 10.1447 0.0772227 10.2193C0.0268617 10.294 -7.03881e-06 10.3819 1.38327e-09 10.4719V12.0541C-8.71835e-06 12.1715 0.0461677 12.284 0.128572 12.3675C0.210976 12.451 0.322933 12.4986 0.440183 12.5H12.0598C12.177 12.4986 12.289 12.451 12.3714 12.3675C12.4538 12.284 12.5 12.1715 12.5 12.0541V10.4719C12.4968 10.3847 12.4684 10.3003 12.4183 10.2289C12.3681 10.1575 12.2983 10.1021 12.2174 10.0696Z"
        fill="currentColor"
        fillOpacity="0.45"
      />
      <path
        d="M19.6609 17.0835C17.2413 16.1505 14.5608 14.9891 14.3391 14.2649V13.508C14.879 12.9241 15.2665 12.2159 15.4673 11.4463C15.6047 11.3486 15.7205 11.2237 15.8074 11.0792C15.8944 10.9348 15.9506 10.774 15.9726 10.6068C15.9947 10.4397 15.982 10.2698 15.9355 10.1078C15.8889 9.94572 15.8096 9.79503 15.7022 9.66507V7.9491C15.7022 6.20052 14.7304 5 12.5 5C10.2696 5 9.2978 6.20052 9.2978 7.9491V9.6455C9.19045 9.77545 9.111 9.92615 9.06446 10.0882C9.01793 10.2502 9.00533 10.4201 9.02737 10.5873C9.0494 10.7544 9.10563 10.9152 9.19256 11.0596C9.27949 11.2041 9.39522 11.329 9.53258 11.4267C9.73085 12.1974 10.1187 12.9061 10.6608 13.4885V14.2453C10.4391 14.9695 7.75871 16.1309 5.33914 17.0639C5.23898 17.1043 5.1531 17.1737 5.09267 17.2632C5.03223 17.3527 4.99999 17.4583 5 17.5663V19.465C4.99999 19.6058 5.0554 19.7409 5.15429 19.841C5.25317 19.9412 5.38752 19.9983 5.52822 20H19.4717C19.6124 19.9983 19.7467 19.9412 19.8456 19.841C19.9445 19.7409 20 19.6058 20 19.465V17.5663C19.9962 17.4617 19.9621 17.3603 19.9019 17.2746C19.8417 17.1889 19.758 17.1226 19.6609 17.0835Z"
        fill="currentColor"
        fillOpacity="0.45"
      />
    </svg>
  );
}

export const UsersIcon = svgIconFactory(Icon);
