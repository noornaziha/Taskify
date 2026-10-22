// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App






import {
  Check,
  ListTodo,
  CalendarDays,
  Star,
  CircleCheck,
  Plus,
  Circle,
  Crown,
  Search,
  Bell,
  ChevronDown,
} from "lucide-react";

import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        {/* Logo */}
        <div className="brand">
          <div className="brand-icon">
            <Check size={20} strokeWidth={4} />
          </div>
          <h2>Taskify</h2>
        </div>

        {/* Main navigation */}
        <nav className="sidebar-nav">
          <ul className="menu-list">
            <li>
              <button className="menu-item active">
                <ListTodo size={15} />
                <span>All Tasks</span>
                <span className="count active-count">12</span>
              </button>
            </li>

            <li>
              <button className="menu-item">
                <CalendarDays size={15} />
                <span>Today</span>
                <span className="count">4</span>
              </button>
            </li>

            <li>
              <button className="menu-item">
                <Star size={15} />
                <span>Important</span>
                <span className="count">3</span>
              </button>
            </li>

            <li>
              <button className="menu-item">
                <CircleCheck size={15} />
                <span>Completed</span>
                <span className="count">5</span>
              </button>
            </li>
          </ul>
        </nav>

        {/* Custom lists */}
        <section className="custom-lists">
          <div className="section-heading">
            <h3>LISTS</h3>
            <button className="icon-button" aria-label="Add list">
              <Plus size={25} />
            </button>
          </div>

          <ul className="menu-list">
            <li>
              <button className="menu-item">
                <Circle className="list-dot personal" size={12} />
                <span>Personal</span>
                <span className="count">4</span>
              </button>
            </li>

            <li>
              <button className="menu-item">
                <Circle className="list-dot work" size={12} />
                <span>Work</span>
                <span className="count">5</span>
              </button>
            </li>

            <li>
              <button className="menu-item">
                <Circle className="list-dot learning" size={12} />
                <span>Learning</span>
                <span className="count">3</span>
              </button>
            </li>

            <li>
              <button className="menu-item">
                <Circle className="list-dot shopping" size={12} />
                <span>Shopping</span>
                <span className="count">2</span>
              </button>
            </li>
          </ul>
        </section>

        {/* Productivity card */}
        <section className="productivity-card">
          <div className="crown-icon">
            <Crown size={15} />
          </div>

          <h3>Stay Productive</h3>

          <p>
            Organize your day and
            <br />
            achieve your goals.
          </p>

          <button className="new-list-button">
            <Plus size={20} />
            <span>New List</span>
          </button>
        </section>
      </aside>

      {/* Main area */}
      <div className="main-area">
        <header className="top-navigation">
          <div className="search-box">
            <Search size={22} />
            <input type="text" placeholder="Search tasks..." />
          </div>

          <div className="top-actions">
            <button
              className="notification-button"
              aria-label="Notifications"
            >
              <Bell size={25} />
              <span className="notification-dot"></span>
            </button>

            <div className="profile">
              <div className="profile-avatar">H</div>
              <span>Haleem</span>
              <ChevronDown size={18} />
            </div>
          </div>
        </header>

          {/* All Tasks, Add Task, and task list will go here */}
          <main className="content-area">
          {/* Content Header */}
           <div className="content-header">
            <div className="content-title">
              <h1>All Tasks</h1>
              <p>Manage your daily tasks and stay productive.</p>
            </div>
            {/* <div className="content-meta">
              <span className="task-count">12 tasks</span>
              <button className="sort-button">
                <span>Sort:</span>
                <strong>Latest</strong>
                <ChevronDown size={15} />
              </button>
            </div> */}
            <div>
              <button className="add-task-button">
                <Plus size={15} />
                <span>Add Task</span>
              </button>
            </div>
          </div>
          </main>
      </div>
    </div>
  );
}

export default App;












