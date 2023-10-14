import {AiTwotoneStar} from 'react-icons/ai'
import Recommend from './Recommend';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getData from './API/createAPI';
import DataNotFound from './DataNotFound';


function Second () {

  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  const { param } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getData(param);
        setState(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    setTimeout(() => {
      fetchData();
    }, 7000); 
  }, [param]);



 


  


  return <> 
  {loading?  <DataNotFound data={"Loading data..."}/>: state.length===0? <DataNotFound data={'Data Not Found'}/>   :<div className='md:flex mt-28 gap-5 max-w-6xl  sm:block  m-auto'>
      <div className='md:w-4/6 '>
        <div>
          <div>
            <h1 className=' text-4xl font-bold'>{state[0].name}</h1>
            <p className=' text-lg my-6 w-11/12 whitespace-pre-line'>
              I am here to provide my <span>{state[0].intro}</span>
            </p>
            <div className=' flex my-6'>
            <span className=' text-blue-500 mt-1  '> <AiTwotoneStar/></span>
            
              <span className='text-blue-400 font-bold mx-2'>{state[0].rating} </span><span>({state[0].reviewCount})</span>
            </div>
            <div className='border p-5'>
              <div className='flex justify-between'>
                <p >{state[0].taskComplexity}</p>
                <h1 className='font-bold'>{state[0].price}</h1>
              </div>
              <div>
                <p className='my-6'>{state[0].deliveryTime}</p>
              </div>
              <div className='flex  gap-6 m-auto'>
              <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold w-1/2 p-2  border border-blue-700 rounded-lg">
              Request Proposal
            </button>
              <button class="bg-transparent hover:bg-blue-500 text-blue-800  hover:text-white  border-2 font-bold w-1/2  border-blue-500 hover:border-transparent rounded-lg p-2">
              Chat with me
            </button>
            
              </div>
            </div>
          </div>
        </div>
        <div className='border p-5 my-8'>
          <h1 className='text-4xl font-bold'>What people say?</h1>
          <p className='text-lg my-6 w-11/12 '>
            I cannot express enough gratitude for the support Micheal has provided in managing my personal finances. Their attention to detail and deep understanding of financial markets has ensured that my investments are in safe hands. I highly recommend their services to anyone seeking financial guidance.
          </p>
        </div>
      </div>

      <div className='text-lg'>
        <img src={state[0].image} alt="Photo not Found" />

        <h1 className='text-4xl font-bold my-7'>About <span>{state[0].name}</span></h1>
        <div className='flex justify-between my-6 mr-20'>
          <ul className='space-y-4'>
            <li className='text-gray-500 font-bold'>FROM</li>
            <li>{state[0].about.from}</li>
          </ul>
          <ul className='space-y-4'>
            <li  className='text-gray-500 font-bold'>PARTNER SINCE</li>
            <li>{state[0].about.partnerSince}</li>
          </ul>
          <ul className='space-y-4'>
            <li  className='text-gray-500 font-bold'>AVERAGE RESPONSE TIME</li>
            <li>{state[0].about.averageResponseTime}</li>
          </ul>
        </div>

        <div className='my-8'>
          <h1 className='text-gray-500 font-bold'>ABOUT</h1>
          <p className='my-4'>
            I am a<span> {state[0].about.description}</span>
          </p>
        </div>

        <div className='flex justify-between mr-16'>
          <div>
            <h1 className='text-gray-500 font-bold'>SERVICES | OFFER</h1>
            <ul className='mx-7 my-3 list-disc'>

            {state[0].about.services.map((el)=>{
              return <>
                <li>{el}</li>
              </>
            })}
             
            </ul>
          </div>
          <div>
            <h1 className='text-gray-500 font-bold'>WHY ME?</h1>
            <ul className=' mx-7 my-3 list-disc'>
            {state[0].about.benefits.map((el)=>{
              return <>
                <li>{el}</li>
              </>
            })}
            </ul>
          </div>
        </div>
      </div>
    </div> }
    

    <div className='md:flex s max-w-6xl m-auto my-32  gap-4'>
<Recommend/>
<Recommend/>
<Recommend/>


    </div>
  </>;
}

export default Second;
