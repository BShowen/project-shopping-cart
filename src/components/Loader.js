import HashLoader from "react-spinners/HashLoader";

export function Loader({ isLoading }) {
  if (isLoading) {
    return (
      <div
        className="d-flex flex-row align-items-center justify-content-center"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          zIndex: 1,
        }}
      >
        <HashLoader
          size="125px"
          loading={isLoading}
          speedMultiplier="2.5"
          color="#BAD300"
        />
      </div>
    );
  }
}
