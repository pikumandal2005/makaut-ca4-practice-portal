import React from 'react';

const ModuleScreen = ({ subject, modules, onStartModule, onStartAll, onBack }) => {
  return (
    <div className="text-center">
      <h2 className="mb-4">Select a Module for {subject.name}</h2>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-secondary btn-lg mb-3" onClick={onBack}>
          Back to Subjects
        </button>
        <button className="btn btn-primary btn-lg" onClick={onStartAll}>
          Start Quiz with All Modules
        </button>
        {modules.map((module, index) => (
          <button
            key={index}
            className="btn btn-info btn-lg"
            onClick={() => onStartModule(module)}
          >
            {module.moduleName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ModuleScreen;
