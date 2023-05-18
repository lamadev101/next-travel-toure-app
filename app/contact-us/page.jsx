import { Banner } from "@/components"

const ContactUs = () => {
  return (
    <main>
      <Banner
        title="Contact Us"
        bgImg="https://images.unsplash.com/photo-1544442069-97dded965a9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
      />
      <div className="flex flex-cols-2 bg-white">
        <div> 
        <img className="h-60 w-full object-cover rounded-md"
            src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80" alt=" Loading" />
          
        </div> 

      </div>
    </main>
  )
}

export default ContactUs