const AddCoffee = () => {
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
    fetch("http://localhost:5000/coffee",{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newCoffee)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.insertedId){
            alert("succesfully done")
        }
    })
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-amber-800">Add New Coffee</h2>
      <form onSubmit={handleAddCoffee} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Name</label>
            <input
              type="text"
              name="name"
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Supplier</label>
            <input
              type="text"
              name="supplier"
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
  );
};

export default AddCoffee;
