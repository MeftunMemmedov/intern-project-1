const header=document.getElementById('header')
const nav=document.getElementById('nav')

    window.addEventListener('scroll',()=>{
        if(window.scrollY>60){
            header.classList.add('bg-light')
            nav.classList.add('text-danger')
        }else{
            header.classList.remove('bg-light')
            nav.classList.remove('text-danger')
        }
        

    })

    


    const employeesBox=document.querySelector('.employees')
    const categoriesBox=document.querySelector('.categories')
    const projectsBox=document.querySelector('.projects')
    const chosenProjectsBox=document.querySelector('.chosen-projects-box')
    const partnersBox=document.querySelector('.partners-box')
    const teamMembers=document.querySelector('.team-members')
    const experence=document.querySelector('.experience')

    const video=document.querySelectorAll('.vid')
    const playnpauseBtn=document.querySelectorAll('.play-btn')

    const vidContainers=document.querySelectorAll('.single-reel')

    vidContainers.forEach((container)=>{
        const vid=container.querySelector('video')
        const btn=container.querySelector('button')

        btn.addEventListener('click',()=>{
            if(vid.paused){
                vid.play()
                btn.innerHTML='<i class="fa-regular fa-circle-pause"  style="font-size:40px; color: #f45510;"></i>'
            }else{
                vid.pause()
                btn.innerHTML='<i class="fa-regular fa-circle-play" style="font-size:40px; color: #f45510;"></i>'
            }
        })
    })

        
    const employees=[
        {
         imageUrl:'assets/images/employee-1.png',
         name:'Mehriban Yaqubova',
         position:'Layiye Direktoru' 
        },
        {
         imageUrl:'assets/images/employee-2.png',
         name:'Elxan Əlai',
         position:'İstehsalat rəhbəri' 
        },
        {
         imageUrl:'assets/images/employee-3.png',
         name:'Samid İsmayılov',
         position:'SƏTƏM müavin' 
        },
        {
         imageUrl:'assets/images/employee-4.png',
         name:'Suğra Sarıyeva',
         position:'Mühasib' 
        },
        {
         imageUrl:'assets/images/employee-5.png',
         name:'Rəhim Vəlizadə',
         position:'Baş usta' 
        },
        {
         imageUrl:'assets/images/employee-6.png',
         name:'Mahir Quliyev',
         position:'Usta' 
        },
    ]

    function mapEmployers(){
     

        employeesBox.innerHTML=employees.map((employee)=>{
            return (
                `<div class="col-lg-4 col-6 single-employee">
                    <div class="row h-100">
                        <div class="col-lg-9 col-12 m-auto h-100">
                            <div class="h-75 w-100 d-flex justify-content-center align-items-center employee-img">
                                <img src=${employee.imageUrl} class="w-50 h-75 object-fit-contain"/>
                            </div>
                            <div class="h-25 text-center d-flex flex-column justify-content-around align-items-center">
                                <h6>${employee.name}</h6>
                                <p>${employee.position}</p>
                            </div>
                        </div>
                    </div>
                </div>`
            )
        }).join('')
    }

        
    const categories=[
        {
            category:'Ofis mebeli',
            imageUrl:'assets/images/c-ofis.jpg'
        },
        {
            category:'Idman Zalları',
            imageUrl:'assets/images/c-idman-zali.jpg'
        },
        {
            category:'Otellər',
            imageUrl:'assets/images/c-oteller.jpg'
        },
        {
            category:'Restoran, Kafe, Bar',
            imageUrl:'assets/images/c-kafe.jpg'
        },
        {
            category:'AVM',
            imageUrl:'assets/images/c-avm.jpg'
        },
        {
            category:'Yumşaq Mebel',
            imageUrl:'assets/images/c-yumsaq-mebel.jpg'
        },
    ]
    
    
    function mapCategories(){
   
        categoriesBox.innerHTML=categories.map((ctgr)=>{
            return(
                ` <div class="col-md-6 col-12 mt-4" >
                    <div class="row">
                      <div class="col-10 m-auto single-category border rounded p-0 overflow-hidden position-relative">
                        <img src=${ctgr.imageUrl} class="w-100 h-100 object-fit-cover"/>
                        <div class="d-inline px-4 bg-light border position-absolute z-3 bottom-0 end-0 category-name d-flex justify-content-center align-items-center">
                        <p class="fs-5 m-0">${ctgr.category}</p>
                        </div>
                      </div>
                    </div>
                  </div>`
            )
        }).join('')
    }
    

        const projects=[
            {
                name:'Maricel Astara Resort',
                imageUrl:'assets/images/projects-maricel-hotel-img.jpg'
            },
            {
                name:'Azza',
                imageUrl:'assets/images/projects-azza-img.jpg'
            },
            {
                name:'Beyləqan Olimpiya İdman Kompleksi',
                imageUrl:'assets/images/projects-beyleqan-oik.jpg'
            },
            {
                name:'Azərtac',
                imageUrl:'assets/images/projects-azertac-img.jpg'
            },
            {
                imageUrl:"assets/images/chosen-project-img1.jpg",
                name:"87 nömrəli məktəb"
            },
        ]

        function mapProjects(){
            projectsBox.innerHTML=projects.map((project,i)=>{
                return (
                    `
                    <div class="row d-flex justify-content-between single-project mt-5" style="height: 590px;">
                        <div class="col-lg-2 col-1 border-top number border-dark">
                            <h6 class="${i%2==0?'text-start':'text-end'}">${i+1}</h6>
                        </div>
                        <div class="col-lg-9 col-11 border rounded overflow-hidden p-0 position-relative ${i%2==0?'order-last':'order-first'}">
                            <img src=${project.imageUrl} class="w-100 h-100 object-fit-cover"/>
                            <div class="d-inline px-4 bg-light border position-absolute z-3 bottom-0 end-0 project-name d-flex justify-content-center align-items-center">
                                <p class="fs-5 m-0 ">${project.name}</p>
                            </div>
                        </div>
                    </div>
                    `
                )
            }).join('')
        }

        const chosenProjects=[
            {
                name:'Maricel Astara Resort',
                imageUrl:'assets/images/chosen-projects-img1.jpg'
            },
            {
                name:'Azza',
                imageUrl:'assets/images/chosen-projects-img2.jpg'
            },
            {
                name:'Beyləqan Olimpiya İdman Kompleksi',
                imageUrl:'assets/images/chosen-projects-img3.jpg'
            },
            {
                name:'Azərtac',
                imageUrl:'assets/images/chosen-projects-img4.jpg'
            },
            {
                imageUrl:"assets/images/chosen-projects-img5.jpg",
                name:"87 nömrəli məktəb"
            },
            {
                imageUrl:"assets/images/chosen-projects-img5.jpg",
                name:"87 nömrəli məktəb"
            },
            {
                imageUrl:"assets/images/chosen-projects-img5.jpg",
                name:"87 nömrəli məktəb"
            },
            {
                imageUrl:"assets/images/chosen-projects-img5.jpg",
                name:"87 nömrəli məktəb"
            },
        ]
 
    function mapChosenProjects(){
        chosenProjectsBox.innerHTML=chosenProjects.map((project,i)=>{
            return (`
            <div class="swiper-slide h-100">
                <div class="chosen-project h-100 d-flex flex-column ${i%2==0?'justify-content-md-end justify-content-start':'justify-content-start'}">
                    <div class="w-100 h-75">
                        <div class="chosen-project-img overflow-hidden">
                            <img src=${project.imageUrl} class="w-100 h-100"/>
                        </div>
                        <div class="chosen-project-name ">
                            <p>${project.name}</p>
                        </div>
                </div> 
                </div>
            </div>
            `)
        }).join('')
    }
    

    if(partnersBox){
        for(let i=1; i<11; i++){
            partnersBox.innerHTML+=`
            <div class="swiper-slide single-partner d-flex justify-content-center align-items-center">
                <img src="/assets/images/our-partners-img${i}.png" class="w-100 h-100 object-fit-contain"/>
              </div>  
            `
        }
    }
    
    if(categoriesBox){
        mapCategories()
    }
    if(employeesBox){
        mapEmployers()
    }
    if(projectsBox){
        mapProjects()
    }

    if(chosenProjectsBox){
        mapChosenProjects()
    }

    const our_projects_and_stats=document.querySelector('.our-projects-and-stats')
        const statistics=document.querySelectorAll('.statistics')
    
            statistics.forEach((counter)=>{
                const containerHeight=our_projects_and_stats.getBoundingClientRect().top
                
                counter.innerText=0
                
                function countUp(){
                    const target= +counter.getAttribute('data-target')
                    let triggered=false
                    const count=+counter.innerText;
    
                    const increment=target/20
    
                    if(count<target){
                        counter.innerText=count+increment;
                        setTimeout(countUp,100)
                        triggered=true
                        console.log(triggered)
                    }
    
                }
    
                countUp();
                
            })
    
    


        var swiper = new Swiper(".productSwiper", {
            autoplay: {
                delay: 3000,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '">' + "</span>";
              },
            },
          });
    