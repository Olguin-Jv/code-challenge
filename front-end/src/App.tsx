import GetUsername from './components/GetUsername'
import MainContainer from './components/styled/MainContainer'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './queryClient'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <MainContainer>
          <GetUsername />
        </MainContainer>
      </div>
    </QueryClientProvider>
  )
}

export default App
