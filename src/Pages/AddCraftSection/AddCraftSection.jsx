import "../../Utility.css";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
const AddCraftSection = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    console.log(newCoffee);

    // send data to the server
    // fetch(
    //   "https://coffee-store-server-74xiae2di-jhankarphero.vercel.app/coffee",
    //   {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(newCoffee),
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.insertedId) {
    //       Swal.fire({
    //         title: "Success!",
    //         text: "Coffee Added Successfully",
    //         icon: "success",
    //         confirmButtonText: "Cool",
    //       });
    //     }
    //   });
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
      <form onSubmit={handleAddCoffee}>
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
              />
            </label>
          </div>
        </div>
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
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add Coffee"
          className="btn btn-block btn-ghost bg-gray-800 text-white text-base font-bold"
        />
      </form>
    </div>
  );
};

export default AddCraftSection;
