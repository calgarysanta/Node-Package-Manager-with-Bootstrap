import Header from './Header.js';
import EducationCard from './EducationCard.js';
import WorkExperienceCard from './WorkExperienceCard.js';
import TechnologySummaryCard from './TechnologySummaryCard.js';
import './App.css';

function App() {
  return (
      <>
    <div className="App">
	
    <Header />
    
    <main className="container">
        <div className="row mt-3">
            <div className="col-md">
                <WorkExperienceCard/>
            </div>
            
            <div className="col-md">
                <EducationCard/>
            </div>
            
            <div className="row mt-3">
                <div className="col-md mb-5">
                    <TechnologySummaryCard/>
                </div>
            </div>
        </div>
    </main>
    
    </div>
    </>
  );
}

export default App;
