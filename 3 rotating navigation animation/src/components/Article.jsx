

export default function Article({ articleAxis }){

    return (
        <div className={` w-screen h-auto flex flex-col px-24 py-14 ${articleAxis} bg-white transition-all duration-500 `}>
            <div className=" my-4">
                <h1 className=" text-3xl font-semibold">Amazing Article</h1>
                <p className=" text-sm italic">Ayush maurya</p>
            </div>
            <div className="my-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi reiciendis, optio nemo voluptatem saepe odit laborum excepturi! Eligendi, ut? Natus quisquam consequuntur minus eaque facere exercitationem hic nemo aperiam qui quam et officia, maiores sit iste magni dicta accusamus modi soluta! Ut est maxime numquam laborum! Vel, accusantium blanditiis? Suscipit atque iste dignissimos quidem ut officia? Debitis officiis iusto, modi, quod accusamus mollitia maiores nostrum ab eos ipsa eum dignissimos tempora asperiores temporibus ex blanditiis quia consectetur, voluptatem accusantium! Quas accusantium iusto, consectetur rerum ipsam perspiciatis eveniet ipsum quis placeat sapiente velit. Id possimus animi hic, similique repudiandae voluptatibus saepe.</p>
            </div>
            <div className=" my-4 ">
                <p className=" text-xl font-semibold my-2">My dog</p>
                <div className=" w-full h-screen bg-cover" style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1621706967208-dfd2c8779beb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
                }}></div>
                <div className=" py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsam tenetur numquam iure tempore, saepe aut. Qui, repellendus ipsam quaerat delectus nisi deleniti tenetur iste dicta commodi corporis possimus reiciendis inventore voluptas alias cumque dolorem porro quae eligendi quas ullam repudiandae neque, maxime laudantium. Nostrum, dicta? Sunt corrupti, quaerat fuga cumque ad ullam sit exercitationem laudantium assumenda explicabo neque quasi quas tempore minus unde. Excepturi dolorum nulla quia! Non fugit, nihil quasi in harum dolores velit earum vel aliquid qui illo, ullam dicta modi porro id, molestias voluptas ratione quod delectus. Rem vel atque ipsum, at voluptates quod expedita? In!
                </div>
            </div>
        </div>
    )

}