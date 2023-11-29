import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
 
 const SpecialOffer = () => {
   return (
    <section className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      {/* Lado izquierdo */}
      <div className="flex-1 flex justify-center items-center">
        <img 
          src={offer} 
          alt="shoe collection" 
          width={570} 
          height={522} 
          className="object-contain relative z-10" 
      />
      </div>

      {/* Lado derecho */}
      <div className="flex flex-1 flex-col"> 
          <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
            <span className="text-coral-red"> Special</span> Offer 
          </h2>
          <p className='mt-4 lg:mas-w-lg info-text'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.<br /><br />Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
          <div className="mt-11 flex gap-6">
            <Button label='Shop now' iconURL = {arrowRight} />
            <Button 
              label='Learn more' 
              backgroundColor='bg-white'
              borderColor='border-slate-gray'
              textColor='text-slate-gray'
            />
          </div>
      </div>
  </section>
   )
 }
 
 export default SpecialOffer