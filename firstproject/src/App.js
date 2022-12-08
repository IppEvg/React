import Massage from '../src/components/func/Massage'
function App() {
  return (
    <>
      {/* в компоненте подключал стиль файлом. Тут сделал просто на месте */}
      <h1 style={{ textAlign: 'center' }}>My first project</h1>
      <div style={{ margin: '0 auto', width: '100px' }}>
        <Massage text='text for props'></Massage>
      </div>
    </>
  )
}

export default App
