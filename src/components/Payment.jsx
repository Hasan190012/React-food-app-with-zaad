import { useEffect, useState } from "react";

const Payment = () => {


    const initialPayment = {
        evc : false,
        zaad : false,
        sahal : false,
    };

    const [paymentMethod, setPaymentMethod] = useState(initialPayment);
    const [updated, setUpdated] = useState(false);
    const [phone, setPhone] = useState("");

    useEffect(() => {}, [updated]);

    const handleSubmit = (event) => {

        event.preventDefault();
        console.log(phone);

    }


    return (

        <div>
            <h2>Pay with</h2>
            <div className="payment-cards">

            <div className={`payment-card ${paymentMethod.zaad && "selected"}`} onClick={() => setPaymentMethod({ ...initialPayment , zaad : true })}>  
                    <h3>Zaad Service</h3>
            </div>

            <div className={`payment-card ${paymentMethod.evc && "selected"}`} onClick={() => setPaymentMethod({ ...initialPayment , evc : true })}>
                    <h3>Evc Plus</h3>
            </div>

            <div className={`payment-card ${paymentMethod.sahal && "selected"}`} onClick={() => setPaymentMethod({ ...initialPayment , sahal : true})}>
                    <h3>Sahal</h3>
            </div>

            <form  onSubmit={handleSubmit}>
                <input type="text" className="form-control" placeholder="2526..."  onChange={(e) => setPhone(e.target.value)}/>
                <button className="btn-proceed">Proceed!</button>
            </form>
            </div>
            
        </div>
    );
}
export default Payment;