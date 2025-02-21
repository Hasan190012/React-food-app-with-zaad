import Product from "./Product";
import '../style.css';



const products = [
    {
        id: 1,
        name: "pizaa",
        urlImage: "https://img.freepik.com/free-photo/delicious-pizza-served-wooden-table_23-2147926042.jpg?t=st=1739527725~exp=1739531325~hmac=410489539d4e2b17d7324f924d43604f678aee772ebddb145ca298f3565fd34d&w=740",
        price: 10,
    },

    {
        id: 2,
        name: "burger",
        urlImage: "https://img.freepik.com/free-photo/front-view-burger-fries-plate_23-2148784444.jpg?t=st=1739527825~exp=1739531425~hmac=de5f0e26a4452147bb368a77836a6bc89b973808461d0158df30dfa9785c9839&w=996",
        price: 10,
    },

    {
        id: 3,
        name: "chickenberry",
        urlImage: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 20,
    },

    {
        id: 4,
        name: "pizza",
        urlImage: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 15,
    },

    {
        id: 5,
        name: "chipsandwich",
        urlImage: "https://plus.unsplash.com/premium_photo-1664391779617-c81011293ef6?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 6,
    },

    {
        id: 6,
        name: "suarma bean",
        urlImage: "https://images.unsplash.com/photo-1541329351076-600b0f9fdf28?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 8,
    },
    {
        id: 7,
        name: "chicken masala",
        urlImage: "https://plus.unsplash.com/premium_photo-1664391929657-f901ee7f1414?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpY2tlbiUyMG1hc2FsYXxlbnwwfHwwfHx8MA%3D%3D",
        price: 11,
    },
    {
        id: 8,
        name: "pasta meal",
        urlImage: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 10,
    }

];



const Products = () => {
    return (
        <div className="grid">
            {products.map(product => (
            
            <Product key={products.id} product={product} />
            
        ))};
    
        </div>
    )
};

export default Products;