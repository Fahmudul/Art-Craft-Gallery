import "../../Utility.css";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
const AddCraftSection = () => {
  let customization;
  let inStock;
  const handleRadioChange = (e) => {
    // console.log(e.target.value);
    if (e.target.value == "yes" || e.target.value == "no") {
      customization = e.target.value;
    } else if (e.target.value == "madeToOrder" || e.target.value == "inStock") {
      inStock = e.target.value;
    }
  };
  const handleAddArtOrCraft = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const item_name = form.item_name.value;
    const subcategory = form.subcategory.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const processingTime = form.processingTime.value;
    // console.log(customization, inStock);
    const newArtCraftDetails = {
      name,
      email,
      item_name,
      subcategory,
      description,
      price,
      rating,
      photo,
      processingTime,
      customization,
      inStock,
    };

    // send data to the server via POST
    fetch("https://art-craft-store-server-lac.vercel.app/artsandcrafts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newArtCraftDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your Art/Craft Added Successfully",
            icon: "success",
            confirmButtonText: "Add more",
          });
        }
      });
  };

  return (
    <div className="tablet  md:border lg:border-none border w-[90%] mx-auto mt-4 rounded-xl p-4 md:p-12 lg:p-24">
      <Helmet>
        <meta charSet="utf-8" />
        <title>PaletteParadise | Add Craft</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h2 className="text-3xl font-extrabold text-center text-[#cccccc] mb-4">
        Add Your Art & Craft
      </h2>
      <form onSubmit={handleAddArtOrCraft}>
        {/* form name and quantity row */}
        <div className="flex flex-col md:flex-row lg:flex-row mb-8 gap-3">
          <div className="form-control w-full md:w-1/2 lg:w-1/2">
            <label className="label">
              <span className="label-text  text-base font-bold text-[#cccccc]">
                Name
              </span>
            </label>
            <label className="input-group">
              <input
                type="name"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control w-full md:w-1/2 lg:w-1/2">
            <label className="label">
              <span className="label-text text-base font-bold text-[#cccccc]">
                Email
              </span>
            </label>
            <label className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        {/* form supplier row */}
        <div className="flex flex-col md:flex-row lg:flex-row mb-8 gap-3">
          <div className="form-control w-full md:w-1/2 lg:w-1/2">
            <label className="label">
              <span className="label-text text-base font-bold text-[#cccccc]">
                Item Name
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="item_name"
                placeholder="Your Item"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control w-full md:w-1/2 lg:w-1/2">
            <label className="label">
              <span className="label-text text-base font-bold text-[#cccccc]">
                Subcategory
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="subcategory"
                placeholder="Provide a subcategory"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}

        {/* form category and details row */}
        <div className="flex flex-col md:flex-row lg:flex-row mb-8 gap-3">
          <div className="form-control w-full md:w-1/2 lg:w-1/2">
            <label className="label">
              <span className="label-text text-base font-bold text-[#cccccc]">
                Short Description
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control w-full md:w-1/2 lg:w-1/2">
            <label className="label">
              <span className="label-text text-base font-bold text-[#cccccc]">
                Price
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        {/* form Photo url row */}
        <div className="flex flex-col md:flex-row lg:flex-row mb-8 gap-3">
          <div className="form-control w-full md:w-1/2 lg:w-1/2">
            <label className="label">
              <span className="label-text text-base font-bold text-[#cccccc]">
                Rating
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control w-full md:w-1/2 lg:w-1/2">
            <label className="label">
              <span className="label-text text-base font-bold text-[#cccccc]">
                Photo URL
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row mb-8 gap-3">
          <div className="form-control w-full md:w-1/2 lg:w-1/2 mb-4">
            <label className="label">
              <span className="label-text text-base font-bold text-[#cccccc]">
                Processing Time
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="processingTime"
                placeholder="Processing Time"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="flex flex-col w-1/2 md:flex-row lg:flex-row mb-4 gap-3  items-center bg-blur px-3 rounded-lg border shadow-xl">
            <div className="form-control w-full md:w-1/2 lg:w-1/2 ">
              <label className="label">
                <span className="label-text text-base font-bold text-[#cccccc]">
                  Customize Description
                </span>
              </label>
              <div className="flex gap-5">
                <div className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="radio-1"
                    id="yes"
                    className="radio"
                    required
                    value="yes"
                    onChange={handleRadioChange}
                  />
                  <label className="text-white cursor-pointer" htmlFor="yes">
                    Yes
                  </label>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="radio-1"
                    id="no"
                    className="radio"
                    required
                    value="no"
                    onChange={handleRadioChange}
                  />
                  <label className="text-white cursor-pointer" htmlFor="no">
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="form-control w-full md:w-1/2 lg:w-1/2 ">
              <label className="label">
                <span className="label-text text-base font-bold text-[#cccccc]">
                  Stock Status
                </span>
              </label>
              <div className="flex gap-5">
                <div className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="radio-stock"
                    id="inStock"
                    className="radio"
                    required
                    value="inStock"
                    onChange={handleRadioChange}
                  />
                  <label
                    className="text-white cursor-pointer"
                    htmlFor="inStock"
                  >
                    In Stock
                  </label>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="radio-stock"
                    id="madeToOrder"
                    className="radio"
                    value="madeToOrder"
                    required
                    onChange={handleRadioChange}
                  />
                  <label
                    className="text-white cursor-pointer"
                    htmlFor="madeToOrder"
                  >
                    Made to Order
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className=" w-full custom-btn btn-7 text-lg  font-bold">
          <input type="submit" value="Add Your Art/Craft" />
        </button>
      </form>
    </div>
  );
};

export default AddCraftSection;
