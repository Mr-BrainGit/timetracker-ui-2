import { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar(props) {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Tableau de bord", src: "Chart_fill", route: "/" },
    { title: "Projets ", src: "project", route: "/projets" },
    { title: "Employés", src: "groupe", route: "/employe" },
    { title: "Pointages ", src: "pointage", route: "/pointages" },
    { title: "Demandes de congé ", src: "conge", route: "/Conges" },
    { title: "Paramètrage", src: "Setting", route: "/setting" },
  ];
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300 posis`}
      >
        <img
          src={require("../assets/control.png")}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-1 shadow-md rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={require('../assets/logo.png')}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Timetracker
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link  to={Menu.route}>
                <li
                  key={index}
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                  ${Menu.gap ? "mt-9" : "mt-2"} ${
                    index === props.index && "bg-light-white"
                  } `}
                >
                  <img className='sideIcon' src={require(`../assets/${Menu.src}.png`)} />
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
          <div>
            <span className="icons flex p-2 rounded-lg">
              <img
                src={require('../assets/user.png')}
                className={`cursor-pointer duration-500 `}
              />
            </span>
          </div>
        </div>
        <span className="flex p-0.5 rounded-lg bg-indigo-100">
            </span>
      </div>
    </div>
  );
}

export default Sidebar;
