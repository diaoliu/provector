import { useRouter } from "next/router";

const useNextSeoProps = () => {
  const { asPath } = useRouter();

  return { titleTemplate: asPath === "/" ? "Provector" : "Provector | %s" };
};

export default useNextSeoProps;
