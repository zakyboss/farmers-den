import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default function Spinner() {
  const loading = true;
  return (
    <div>
      <ClipLoader
        color="grey"
        loading={loading}
        css={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
