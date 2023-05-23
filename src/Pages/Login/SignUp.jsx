export default function SignUp(){

    const signUp = async() =>{
        try{
        const response = await fetch('/api/auth/signup',{
            body: {
                email: 'shreyanshtiwari1997@gmail.com',
                password: 'shreyansh'
            }
        })

        console.log(response.json())

        }catch(error){
            console.log(error.message)
        }
    }

    return(
        <div>

        </div>
    )
}