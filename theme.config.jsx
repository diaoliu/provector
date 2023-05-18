const logo = (
  <>
    <svg width="20" height="20" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M2.0767,24.0001c-1.2831,0 -2.2591,-1.1523 -2.0478,-2.418l3.3133,-19.8478c0.1671,-1.0008 1.0331,-1.7343 2.0478,-1.7343h5.8969l-3.7169,22.2657c-0.1671,1.0008 -1.0331,1.7343 -2.0478,1.7343z"
      />
      <path
        fill="currentColor"
        d="M22.3266,8.2502c0,4.5564 -3.6937,8.2501 -8.2501,8.2501c-0.9382,0 -2.0228,0 -2.7896,0l2.7896,-16.5002c4.5564,0 8.2501,3.6937 8.2501,8.2501z"
      />
    </svg>
    <span className="logo">Provector</span>
  </>
);

const themeConfig = {
  logo,
  project: {
    link: "https://github.com/diaoliu/provector",
  },
  footer: {
    text: `©${new Date().getFullYear()} Diao Liu`,
  },
};

export default themeConfig;
