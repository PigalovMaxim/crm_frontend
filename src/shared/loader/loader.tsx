import LoadingIcon from "./assets/loading.png";

export default function Loader() {
  return (
    <img src={LoadingIcon} alt="loading" className="w-5 h-5 animate-spin" />
  );
}
