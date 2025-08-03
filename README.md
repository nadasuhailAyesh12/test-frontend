# English Learning App Frontend

A modern React application for English learning with a comprehensive lecture system, built with TypeScript, Zustand for state management, and Ant Design for UI components.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, TypeScript, and functional components
- **State Management**: Zustand for lightweight and efficient state management
- **UI Framework**: Ant Design for beautiful and responsive UI components
- **Modular Structure**: Well-organized module-based architecture
- **Type Safety**: Full TypeScript support with comprehensive interfaces
- **Responsive Design**: Mobile-first responsive design approach
- **API Integration**: Axios-based API client with interceptors
- **Data Mapping**: Clean separation between API responses and UI models

## 📁 Project Structure

```
src/
├── components/                 # Shared components
│   ├── AppHeader.tsx          # Main application header
│   ├── AppHeader.scss
│   ├── AppSidebar.tsx         # Navigation sidebar
│   └── AppSidebar.scss
├── modules/                   # Feature modules
│   └── lectures/             # Lectures module
│       ├── lectures.container.tsx    # Container component
│       ├── lectures.module.scss      # Module styles
│       └── components/               # Module components
│           ├── LecturesList.tsx      # Lectures grid display
│           ├── LecturesList.scss
│           ├── LecturesFilters.tsx   # Filter and search
│           └── LecturesFilters.scss
├── shared/                   # Shared utilities and services
│   ├── api/                  # API configuration
│   │   └── apiClient.ts      # Axios client setup
│   ├── mappers/              # Data transformation
│   │   └── lecture.mapper.ts # API to UI data mapping
│   ├── models/               # TypeScript interfaces
│   │   └── lecture.interface.ts
│   └── services/             # API services
│       └── lecture.service.ts
├── store/                    # Zustand stores
│   └── lecture.store.ts      # Lectures state management
├── App.tsx                   # Main application component
├── App.scss                  # Global styles
└── index.tsx                 # Application entry point
```

## 🛠️ Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Zustand** - State management
- **Ant Design** - UI components
- **React Router** - Navigation
- **Axios** - HTTP client
- **Sass** - CSS preprocessing

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd english-learning-app-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

### Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

## 📋 Module Structure Example: Lectures

The lectures module demonstrates the complete architecture pattern:

### Container Component (`lectures.container.tsx`)
- Connects Zustand store with UI components
- Handles data fetching and state management
- Manages component lifecycle and user interactions

### Components
- **LecturesList**: Displays lectures in a responsive grid
- **LecturesFilters**: Provides filtering and search functionality

### Store (`lecture.store.ts`)
- Manages lectures state (loading, data, error)
- Handles API calls through services
- Provides actions for state updates

### Service (`lecture.service.ts`)
- Encapsulates API calls
- Uses the shared API client
- Handles error management

### Mapper (`lecture.mapper.ts`)
- Transforms API responses to UI-friendly format
- Ensures data consistency across the application

### Models (`lecture.interface.ts`)
- TypeScript interfaces for type safety
- Defines data structures for API and UI

## 🎨 UI Features

- **Responsive Grid Layout**: Adapts to different screen sizes
- **Interactive Cards**: Hover effects and smooth transitions
- **Advanced Filtering**: Category, level, and search filters
- **Pagination**: Efficient data loading
- **Progress Tracking**: Visual progress indicators
- **Modern Design**: Clean and intuitive interface

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_BASE_URL=http://localhost:3001/api
```

### API Configuration

The API client is configured in `src/shared/api/apiClient.ts` with:
- Base URL configuration
- Request/response interceptors
- Authentication token handling
- Error handling

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Flexible grid system
- Adaptive navigation
- Touch-friendly interactions

## 🔄 State Management

Zustand is used for state management with:
- Simple and lightweight API
- TypeScript support
- DevTools integration
- Modular store structure

## 🎯 Key Features

1. **Lecture Management**: Browse, filter, and search lectures
2. **Progress Tracking**: Monitor learning progress
3. **User Interface**: Modern and intuitive design
4. **Performance**: Optimized rendering and data loading
5. **Accessibility**: WCAG compliant components

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.