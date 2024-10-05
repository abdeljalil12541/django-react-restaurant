import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';


const Reservation = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [espace, setEspace] = useState('Fumeur');
    const [message, setMessage] = useState('');

    const {t, i18n} = useTranslation("global")
    const globalToastMsg = t("reservation.toast");

    const handleReservation = async (e) => {
        e.preventDefault();

        if (!name || !email || !phone_number || !date || !time || !espace) {
            console.log('Please fill all required fields');
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/r%C3%A9servation/', {name, email, phone_number, date, time, espace, message});
            console.log('reservation created', response.data);

            setName('');
            setEmail('');
            setPhoneNumber('');
            setDate('');
            setTime('');
            setEspace('Fumeur');
            setMessage('');

            toast.success(globalToastMsg);
        } catch{
            (error) => {
                console.log('error', error)
            }
        }
    }    


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_361wjgd', 'template_a4frwtc', form.current, {
            publicKey: 'O6GvIgU8iu3YxU-TY',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    
    return(<>
            <section class="pb-6">
                <div>
                    <div class="flex">
                        <div class="lg:mb-0 mb-10">
                            <div class="group w-full h-full">
                                <div class="relative h-full">
                                    <div style={{position: "absolute", zIndex: 0, backgroundColor: 'black', width:'100%', height:'100%', opacity: '0.6', top: '0', left: '0'}}></div>
                                    <img style={{width: '100%'}} src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/d3/08/df/caption.jpg?w=1200&h=-1&s=1" alt="ContactUs tailwind section" class="w-full h-full bg-blend-multiply bg-indigo-700 object-cover"/>
                                    <h1 class="font-manrope text-[#d1b26b] text-4xl font-bold leading-10 absolute top-11" style={{left: '35%'}}>{t("reservation.titleOverImg")}</h1>
                                        
                                    <div className="flex justify-center hidden left-36 absolute top-28">
                                        <iframe 
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13293.409873183311!2d-7.632624497509974!3d33.59615810115904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d284a391f735%3A0x7e53f04c7d19a9ed!2sDar%20Beida!5e0!3m2!1sen!2sma!4v1726871581320!5m2!1sen!2sma" 
                                            width="680" 
                                            height="380" 
                                            className="pt-5"
                                            style={{ border: 0 }} 
                                            allowFullScreen 
                                            loading="lazy" 
                                            referrerPolicy="no-referrer-when-downgrade">
                                        </iframe>
                                    </div>
                                        
                                    <div class="absolute bottom-0 w-full lg:p-11 p-5">
                                        <div class="bg-white text-black p-6 block">
                                            <a href="javascript:;" class="flex items-center mb-6">
                                                <svg fill="#ac852a" height="25px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 473.806 473.806" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4 c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8 c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6 c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5 c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26 c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9 c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806 C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20 c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6 c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1 c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3 c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5 c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8 c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9 l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1 C420.456,377.706,420.456,388.206,410.256,398.806z"></path> <path d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2 c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11 S248.656,111.506,256.056,112.706z"></path> <path d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11 c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2 c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z"></path> </g> </g> </g></svg>
                                                <h5 class="text-black text-base font-normal leading-6 ml-5">{t("reservation.p1OverImg")}</h5>
                                            </a>
                                            <a href="javascript:;" class="flex items-center mb-6">
                                            <svg height="30px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 8L8.44992 11.6333C9.73295 12.4886 10.3745 12.9163 11.0678 13.0825C11.6806 13.2293 12.3194 13.2293 12.9322 13.0825C13.6255 12.9163 14.2671 12.4886 15.5501 11.6333L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#ac852a" stroke-width="1.104" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                                <h5 class="text-black inline-block text-base font-normal leading-6 ml-5">{t("reservation.p2OverImg")}</h5>
                                            </a>

                                            <a href="javascript:;" class="flex items-center">
                                            <svg fill="#ac852a" height="27px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.536 489.536" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 489.536 489.536"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="m488.554,476l-99-280.2c-1-4.2-5.2-7.3-9.4-7.3h-45.6c12.9-31.1 19.6-54.9 19.6-70.8 0-64.6-50-117.7-112.5-117.7-61.5,0-112.5,52.1-112.5,117.7 0,17.6 8.2,43.1 19.9,70.8h-39.7c-4.2,0-8.3,3.1-9.4,7.3l-99,280.2c-3.2,10.3 6.3,13.5 9.4,13.5h468.8c4.2,0.5 12.5-4.2 9.4-13.5zm-246.9-455.3c51,1.06581e-14 91.7,43.7 91.7,96.9 0,56.5-79.2,182.3-91.7,203.1-31.3-53.1-91.7-161.5-91.7-203.1 0-53.1 40.6-96.9 91.7-96.9zm-216.7,448l91.7-259.4h41.7c29.9,64.1 83.3,151 83.3,151s81.4-145.7 83.8-151h47.4l91.7,259.4h-439.6z"></path> <rect width="136.5" x="177.054" y="379.1" height="20.8"></rect> <path d="m289.554,108.2c0-26-21.9-47.9-47.9-47.9s-47.9,21.9-47.9,47.9 20.8,47.9 47.9,47.9c27.1,0 47.9-21.8 47.9-47.9zm-75-1c0-14.6 11.5-27.1 27.1-27.1s27.1,12.5 27.1,27.1-11.5,27.1-27.1,27.1c-14.6,2.84217e-14-27.1-12.5-27.1-27.1z"></path> </g> </g> </g></svg>                                                
                                            <h5 class="text-black text-base font-normal leading-6 ml-5">{t("reservation.p3OverImg")}</h5>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                <div style={{width: '30%'}} class=" max-w-md mx-auto bg-white shadow-lg  overflow-hidden">
                        <div class="text-2xl py-4 px-6 bg-[#d1b26b] text-white text-center font-bold uppercase">
                            {t("reservation.formTitle")}
                        </div>
                        <form ref={form} onSubmit={(values) => {handleReservation(values); sendEmail(values);}} class="py-4 px-6">
                            <div class="mb-4">
                                <label class="block text-gray-700 font-bold mb-2" for="name">
                                    {t("reservation.formP1")}
                                </label>
                                <input
                                    required
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="name" id="name" type="text" placeholder={t("reservation.formP1Holder")} 
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    />
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 font-bold mb-2" for="email">
                                    {t("reservation.formP2")}
                                </label>
                                <input
                                    required
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="email" id="email" type="email" placeholder={t("reservation.formP2Holder")} 
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    />
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 font-bold mb-2" for="phone">
                                    {t("reservation.formP3")}
                                </label>
                                <input
                                    required
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="phone_number" id="phone" type="tel" placeholder={t("reservation.formP3Holder")}  
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    value={phone_number}
                                    />
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 font-bold mb-2" for="date">
                                    {t("reservation.formP4")}
                                </label>
                                <input
                                    required
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="date" id="date" type="date" placeholder={t("reservation.formP4Holder")} 
                                    onChange={(e) => setDate(e.target.value)}
                                    value={date}
                                    />
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 font-bold mb-2" for="time">
                                    {t("reservation.formP5")}
                                </label>
                                <input
                                    required
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="time" id="time" type="time" placeholder={t("reservation.formP5Holder")}
                                    onChange={(e) => setTime(e.target.value)}
                                    value={time}
                                    />
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 font-bold mb-2" for="service">
                                    {t("reservation.formP6")}
                                </label>
                                <select
                                    required
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="espace" id="service"
                                    value={espace}
                                    onChange={(e) => setEspace(e.target.value)}
                                    >
                                    <option value="Fumeur" onChange={(e) => setEspace(e.target.value)}>{t("reservation.formP6Option1")}</option>
                                    <option value="Non Fumeur" onChange={(e) => setEspace(e.target.value)}>{t("reservation.formP6Option2")}</option>
                                    <option value="Sans Avis" onChange={(e) => setEspace(e.target.value)}>{t("reservation.formP6Option3")}</option>
                                </select>
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 font-bold mb-2" for="message">
                                    {t("reservation.formP7")}
                                </label>
                                <textarea
                                    required
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="message" id="message" rows="4" placeholder={t("reservation.formP7Holder")}
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                />
                            </div>
                            <div class="flex items-center justify-center mb-4">
                                <button
                                    class="bg-[#d1b26b] duration-150 text-white py-2 px-4 rounded hover:bg-[#a28419] focus:outline-none focus:shadow-outline"
                                    type="submit">
                                        {t("reservation.btn")}
                                </button>
                            </div>
                        <ToastContainer />
                        </form>
                    </div>
                </div>


            </div>
        </section>
</>
    )
}
export default Reservation