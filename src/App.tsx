// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ConfigProvider } from 'antd';
// import { Layout } from 'antd';
// import AppHeader from './modules/lectures/shared/components/AppHeader';
// import AppSidebar from './modules/lectures/shared/components/AppSidebar';
// import LecturesContainer from './modules/lectures/lectures.container';
// import './App.scss';

// const { Content } = Layout;

// function App() {
//   return (
//     <ConfigProvider>
//       <Router>
//         <Layout className="app-layout">
//           <AppSidebar />
//           <Layout>
//             <AppHeader />
//             <Content className="app-content">
//               <Routes>
//                 <Route path="/" element={<div>Welcome to English Learning App</div>} />
//                 <Route path="/lectures" element={<LecturesContainer />} />
//               </Routes>
//             </Content>
//           </Layout>
//         </Layout>
//       </Router>
//     </ConfigProvider>
//   );
// }

// export default App;