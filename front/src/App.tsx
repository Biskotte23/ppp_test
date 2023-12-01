import { useContext, useEffect, useState } from 'react';
import './App.scss';
import { ToolOutlined } from '@ant-design/icons';
import { TestServiceContext } from './services/TestService';
import { PickTestExcludeKeyofTestId as TestDTO } from './generated/api';

export default function App() {
  const testService = useContext(TestServiceContext);
  const [tests, setTests] = useState<TestDTO[]>([]);
  const [counter, setCounter] = useState(0);
  const max = 4;

  async function updateTests() {
    try {
      const testList = await testService.getTests();
      setTests(testList);
    } catch (error) {}
  }

  function incrementCounter() {
    setCounter((counter + 1) % max);
  }

  function getSuspensionPoints() {
    return '...'.split('').map((point, index) => (
      <span key={`point-${index}`} className={`point ${index >= counter ? 'point--hidden' : ''}`}>
        {point}
      </span>
    ));
  }

  useEffect(() => {
    updateTests();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => incrementCounter(), 300);

    return () => clearInterval(interval);
  }, [counter]);

  return (
    <main>
      <h1>
        <ToolOutlined />
        {tests[0]?.label ?? 'Loading'} <span className="points">{getSuspensionPoints()}</span>
      </h1>
    </main>
  );
}
