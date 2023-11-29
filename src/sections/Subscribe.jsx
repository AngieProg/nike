import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id='contact-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 max-container'
    >
    <h3 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
      Sign Up for
      <span className='text-coral-red'> Updates </span>& Newsletter
    </h3>

    <div className='lg:max-w-[40%] flex justify-end max-sm:flex-col p-2.5 items-center gap-5 sm:border sm:border-slate-gray rounded-full w-full'>
      <input 
        type="text"
        placeholder='subscribe@nike.com'
        className="input"
      />
      <div className="flex max-sm:justify-end items-center max-sm:w-full">
        <Button label='Sign Up' fullWidth />
      </div>
    </div>
    </section>
  )
}

export default Subscribe