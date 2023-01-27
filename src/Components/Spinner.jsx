import "./spinner.css";
const Spinner = () => {
  return (
    <>
      <div class="lds-ring bg-black text-dark">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};
export default Spinner;
