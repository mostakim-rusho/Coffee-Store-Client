import { Link } from "react-router";

const CoffeeCard = ({ coffee,coffees,setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
 const handleDelete = (_id) => {
  const confirmDelete = confirm("Are you sure you want to delete this coffee?");
  if (confirmDelete) {
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert('Coffee deleted successfully');
          // এখানে তুমি চাইলে UI থেকে ওই card টি remove করতে পারো
          const remaining =coffees.filter(cof=>cof._id!==_id);
          setCoffees(remaining)
        }
      })
      .catch(err => console.error('Delete failed', err));
  }
};

  return (
    <div className="card card-side bg-base-100 shadow-sm border mt-8 w-10/12 mx-auto">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{quantity}</p>
        <p>{supplier}</p>
        <p>{taste}</p>
        <div className="card-actions justify-end">
          <div className="flex flex-col gap-y-8">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-amber-400">
              View
            </button>
           <Link to={`updatecoffee/${_id}`}>  <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-amber-400">
              Edit
            </button></Link>
            <button onClick={()=>handleDelete(_id)} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-amber-700">
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
