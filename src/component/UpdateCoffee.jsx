import { useLoaderData } from "react-router";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const {_id, name, quantity, supplier, taste, category, details, photo } = coffee;
   const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const UpdatedCoffee = {

      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    console.log(UpdatedCoffee);
 fetch(`https://coffee-store-server-liard-nine.vercel.app/coffee/${_id}`, {
  method: "PUT",
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(UpdatedCoffee)
})
.then(res => res.json())
.then(data => {
  console.log(data);
  if (data.modifiedCount > 0) {
    alert("Coffee updated successfully!");
  } else {
    alert("Nothing was changed.");
  }
});

  };
  return (
    <>
   
     <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-amber-800">Update Coffee {name}</h2>
      <form onSubmit={handleUpdateCoffee} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Coffee name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Available Quantity</label>
            <input
              type="text"
              name="quantity"
              placeholder="Quantity"
                defaultValue={quantity}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Supplier</label>
            <input
              type="text"
              name="supplier"
                defaultValue={supplier}
              placeholder="Supplier name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Taste</label>
            <input
              type="text"
              name="taste"
                defaultValue={taste}
              placeholder="Taste"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Category</label>
            <input
              type="text"
              name="category"
                defaultValue={category}
              placeholder="Category"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Details</label>
            <input
              type="text"
              name="details"
                defaultValue={details}
              placeholder="Details"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1 font-semibold text-gray-700">Photo URL</label>
            <input
              type="text"
              name="photo"
                defaultValue={photo}
              placeholder="Photo URL"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>
        </div>

        <div className="text-center">
          <input
            type="submit"
            value="Add Coffee"
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
          />
        </div>
      </form>
    </div>
    </>
  );
};

export default UpdateCoffee;
