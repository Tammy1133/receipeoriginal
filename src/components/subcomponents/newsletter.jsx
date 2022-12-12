import "../css/newsletter.css";

const Newsletter = () => {
  return (
    <div id="newsletter" className="newsletter mt-5">
      <div className=" topnews d-flex align-items-center text-center justify-content-center flex-column">
        <h3 className="fs-2"> Subscribe to My Newsletter</h3>
        <p className="fs-5 mt-3">
          Get access to my latest recipes by joining the weekly newsletter
        </p>
        <div class="input-group mb-3 mt-4 newsinput">
          <input
            type="text"
            class="form-control"
            placeholder="Your email"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append mx-3">
            <button className="button-19">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
