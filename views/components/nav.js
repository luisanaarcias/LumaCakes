const navbar = document.querySelector('#navbar');

const createNav = (isAdmin) => {
    navbar.innerHTML = `
    <div class="max-w-7xl h-16 mx-auto flex items-center px-6 justify-between">
        <div class="flex flex-1 items-center gap-2 h-10">
            <img src="/images/user/logo.png" alt="logo" class="bg-[#291e16]/90 h-full w-10 rounded-full">
            <div class="bg-[#291e16]/90 h-full w-10 rounded-full"></div>
            <p class="font-bold text-lg text-[#291e16]/90">LumaCakes</p>
        </div>

        <!-- version mobile -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 md:hidden text-[#291e16] cursor-pointer p-2 hover:scale-110 border-2 border-[#291e16] rounded-lg transition-all">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <div class="bg-indigo-950/80 fixed top-16 right-0 left-0 bottom-0 flex justify-center items-center flex-col gap-x-4 gap-y-2 text-white hidden">
            <a href="/" class="relative group w-fit px-6 border-r-2 border-[#291e16]/30 cursor-pointer">
                <span class="text-2xl">Home</span>
                <span class="absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100 w-full"></span>
            </a>
            <a href="/galeria" class="relative group w-fit px-6 border-r-2 border-[#291e16]/30 cursor-pointer">
                <span class="text-2xl">Galería</span>
                <span class="absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100 w-full"></span>
            </a>
            <a href="/cursos" class="relative group w-fit px-6 border-r-2 border-[#291e16]/30 cursor-pointer">
                <span class="text-2xl">Cursos</span>
                <span class="absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100 w-full"></span>
            </a>
            <a href="/contacto" class="relative group w-fit px-6 cursor-pointer">
                <span class="text-2xl">Contacto</span>
                <span class="absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100 w-full"></span>
            </a>
            ${isAdmin 
                ? `<a href="/administrador" class="group w-fit px-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#291e16" class="h-20 group-hover:scale-120 stroke-white transition-all">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </a>`
                : ''}
            ${!isAdmin 
            ?`<a href="/login/" class="ease-in-out mt-10 text-xl text-center text-black/80 font-bold w-[8rem] bg-white/80 hover:bg-white py-2 px-6 rounded-lg transition-all cursor-pointer">Login</a>`
            : `<a class="ease-in-out mt-10 text-xl text-center text-black/80 font-bold w-[8rem] bg-white/80 hover:bg-white py-2 px-6 rounded-lg transition-all cursor-pointer">Cerrar sesion</a>`}
        </div>
            
        <!-- version de escritorio -->
        <div class="hidden md:flex md:flex-1 items-center justify-center text-[#291e16] text-lg">
            <a href="/" class="relative group w-fit px-6 border-r-2 border-[#291e16]/30 cursor-pointer">
                <span class="text-lg">Home</span>
                <span class="absolute bottom-0 left-0 h-0.5 bg-[#291e16] transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100 w-full"></span>
            </a>
            <a href="/galeria" class="relative group w-fit px-6 border-r-2 border-[#291e16]/30 cursor-pointer">
                <span class="text-lg">Galería</span>
                <span class="absolute bottom-0 left-0 h-0.5 bg-[#291e16] transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100 w-full"></span>
            </a>
            <a href="/cursos" class="relative group w-fit px-6 border-r-2 border-[#291e16]/30 cursor-pointer">
                <span class="text-lg">Cursos</span>
                <span class="absolute bottom-0 left-0 h-0.5 bg-[#291e16] transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100 w-full"></span>
            </a>
            <a href="/contacto" class="relative group w-fit px-6 cursor-pointer">
                <span class="text-lg">Contacto</span>
                <span class="absolute bottom-0 left-0 h-0.5 bg-[#291e16] transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100 w-full"></span>
            </a>
            ${isAdmin 
            ? `<a href="/administrador" class="group w-fit px-2 border-l-2 border-[#291e16]/30 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#291e16" class="h-full w-8 group-hover:scale-120 transition-all">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </a>`
            : ''}
        </div>

        ${!isAdmin 
        ? `<div class="md:flex flex-1 hidden items-center justify-end">
                <a href="/login/" class="ease-in-out text-white font-bold w-fit bg-[#291e16]/80 hover:bg-[#291e16] py-2 px-6 rounded-lg transition-all">Login</a>
        	</div>`
        : `<div class="md:flex flex-1 hidden items-center justify-end">
                <a class="ease-in-out text-white font-bold w-fit bg-[#291e16]/80 hover:bg-[#291e16] py-2 px-6 rounded-lg transition-all">Cerrar sesion</a>
        	</div>`}
    </div>`;
};

const adminVerify = async () => {
    try {
        const { data } = await axios.get('/api/users');
        const { isAdmin } = data;
            
        //Crear el nav
        createNav(isAdmin);
    } catch (error) {
        console.log(error);
    }
};
adminVerify()

setTimeout(() => {
    const navBtn = navbar.children[0].children[1];
    
    navBtn.addEventListener('click', e => {
        const menuMobile = navbar.children[0].children[2];
        
        if (!navBtn.classList.contains('active')) {
            navBtn.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />`
            navBtn.classList.add('active');
            menuMobile.classList.remove('hidden');
            menuMobile.classList.add('flex');
        } else {
            navBtn.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />`;
            navBtn.classList.remove('active');
            menuMobile.classList.add('hidden');
            menuMobile.classList.remove('flex');
        }
    })
    
    const closeBtnDescktop = navbar.children[0].children[4].children[0];
    const closeBtnMobile = navbar.children[0].children[2].children[5];
    
    closeBtnDescktop.addEventListener('click', async e => {
        try {
            await axios.get('/api/logout');
            window.location.pathname = '/login';
        } catch (error) {
            console.log(error);
        }
    })
    closeBtnMobile.addEventListener('click', async e => {
        try {
            await axios.get('/api/logout');
            window.location.pathname = '/login';
        } catch (error) {
            console.log(error);
        }
    })
}, 50);