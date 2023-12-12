import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      style={{
        height: "98vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ClipLoader
        color="black"
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />{" "}
    </div>
  );
};

export default Loading;
