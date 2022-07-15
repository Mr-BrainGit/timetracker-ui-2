import { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar(props) {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Tableau de bord", src: "dash", src_active: "dash-active", route: "/" },
    { title: "Projets ", src: "projet", src_active: "projet-active", route: "/projets" },
    { title: "Employés", src: "employe", src_active: "employe-active", route: "/employe" },
    { title: "Pointages ", src: "pointage", src_active: "pointage-active", route: "/pointages" },
    { title: "Demandes de congé ", src: "conge", src_active: "conge-active", route: "/Conges" },
    { title: "Evenements ", src: "reunion", src_active: "reunion-active", route: "/reunion" },
    { title: "Paramètrage", src: "setting", src_active: "setting-active", route: "/setting" },
  ];
  return (
    <div>
        <div class="bg-indigo-600 teste">
          <div class="max-w-8xl mx-auto py-2 px-3 sm:px-4 lg:px-6">
            <div class="flex items-center justify-between flex-wrap">
              <div class="w-0 flex-1 flex items-center">
                <span class="flex p-2 rounded-lg bg-indigo-800">
                  <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </span>
                <p class="ml-3 font-bold text-white truncate">
                  <span class="hidden md:inline">TIMETRACKER-APP</span>
                </p>
                
                
              </div>
              <div className='search-section'>
              <form>   
                  <div class="relative">
                      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                      </div>
                      <input type="search" id="search" class="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-150 rounded-full border border-gray-300 " placeholder="Rechercher un employé" required/>
                      <button type="submit" class="text-white absolute right-2.5 bottom-1.5 bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm px-3 py-1 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
                              <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span class="sr-only">Search</span>
                      </button>
                  </div>
              </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
            <div
                className={` ${
                  open ? "w-72" : "w-20 "
                } bg-dark-purple h-screen p-5  pt-8 relative posis sidebar-menu duration-300 `}
              >
                <img
                  src={require("../assets/control.png")}
                  className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
                  border-1 shadow-md rounded-full  ${!open && "rotate-180"}`}
                  onClick={() => setOpen(!open)}
                />

                <div className="flex profil">
                  <div class="relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                        <img src={require('../assets/avatar.png')} alt="" />
                        <span class="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                  </div>

                  {open && 
                    <div class="overflow-hidden profil-item">

                      <p className='font-bold truncate text-gray-700'>KOUDA W Ezéchias</p>
                      <p className='text-sm text-gray-500'>Backend</p>

                    </div>
                  }
                </div>
                
                <ul className="pt-6">
                  {Menus.map((Menu, index) => (
                    <Link  to={Menu.route}>
                        <li
                          key={index}
                          className={`flex  rounded-md p-2 cursor-pointer  hover:actidve item-name text-sm items-center gap-x-4 
                          ${Menu.gap ? "mt-9" : "mt-2"} ${
                            index === props.index && "active"
                          } `}
                        >

                          {index === props.index ?<img className='sideIcon' src={require(`../assets/${Menu.src_active}.png`)} />: <img className='sideIcon' src={require(`../assets/${Menu.src}.png`)} />
}
                          
                          <span className={`${!open && "hidden"} origin-left duration-200`}>
                            {Menu.title}
                          </span>
                        </li>
                    </Link>
                    
                  ))}
                </ul>
            </div>
            <div className={` ${
                open ? "sidebar-full" : "sidebar-collapse "
              } h-screen flex-1 p-7 duration-300`}>
              <div className="header">
                <div>
                  <h1 className="text-2xl font-semibold ">{props.title}</h1>
                </div>
              </div>
              <span className="flex hr rounded-lg bg-gray-300">
              </span>
              {props.children}
            </div>
        </div>
    </div>
   
  );
}

export default Sidebar;
