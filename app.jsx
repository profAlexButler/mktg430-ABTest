import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ABTestData = [
  {
    team: "ImageTest - Memorial Art Gallery",
    testType: "Image",
    postA: {
      copy: "Come join the Memorial Art Gallery for our Paint and Play night! Bring your kids and their friends this Thursday for an evening of artistic exploration, community and inspiration. Don't miss out, this adventure will begin at 6:00 pm.",
      image: "https://drive.google.com/uc?export=view&id=1oyA1e59uodFxH6Lm1ZOKkxptQKI1xLU-"
    },
    postB: {
      copy: "Come join the Memorial Art Gallery for our Paint and Play night! Bring your kids and their friends this Thursday for an evening of artistic exploration, community and inspiration. Don't miss out, this adventure will begin at 6:00 pm.",
      image: "https://drive.google.com/uc?export=view&id=1X7iExJ1Ob33mfuZSoIVjmvegUZU1ANto"
    }
  },
  {
    team: "CopyTest - Crocs",
    testType: "Copy",
    postA: {
      copy: "Embrace your inner ninja with our Naruto collection, available 10/22! #Naruto #Crocs",
      image: "https://drive.google.com/uc?export=view&id=1KF7rHkPps0JHVDpGYzrj1X7pbs_OxvHG"
    },
    postB: {
      copy: "Twin with everyone's favorite alien on 10/22! Disney Stitch collection available now! 👽 #Disney #Stitch #Crocs",
      image: "https://drive.google.com/uc?export=view&id=15Jmvl2hPulRwPpAWBEK9h42FUY91whNV"
    }
  },
  {
    team: "CopyTest - Duolingo",
    testType: "Copy",
    postA: {
      copy: "Nobody ignores me....for long",
      image: "https://drive.google.com/uc?export=view&id=1-Ye3DcwG5Ja8DCZQjAsG5N-gG-o8BNWm"
    },
    postB: {
      copy: "I miss you, please come back!",
      image: "https://drive.google.com/uc?export=view&id=1VcKX4dZu_AnR0A3LuUxLuSdYOLvCBIlE"
    }
  },
  {
    team: "CopyTest - Tim Hortons",
    testType: "Copy/Audience",
    postA: {
      copy: "Whipped iced coffee - targeting Gen Z (currently trending)",
      image: "https://drive.google.com/uc?export=view&id=1veMb5VWvPYUnfy7BYbNMqwLFVGLwGV4I"
    },
    postB: {
      copy: "Black mug with red logo - targeting Millennials+ (vintage, fun style)",
      image: "https://drive.google.com/uc?export=view&id=1inR2uaYjNuVf1FmMOpTPm72dAwEaVzsX"
    }
  },
  {
    team: "ImageTest - Spirit Airlines",
    testType: "Image",
    postA: {
      copy: "Fly Spirit With our Cheapest Prices Yet!",
      image: "https://drive.google.com/uc?export=view&id=1yDeivUF_vDtN-mmGZ4t-CqT73rRQmGWp"
    },
    postB: {
      copy: "Fly Spirit With our Cheapest Prices Yet!",
      image: "https://drive.google.com/uc?export=view&id=1wlD8r_khF9s4gUj1Heq88aa6IQSkjAe9"
    }
  },
  {
    team: "ImageTest - Duolingo",
    testType: "Image",
    postA: {
      copy: "When Duolingo starts losing patience with you...",
      image: "https://drive.google.com/uc?export=view&id=1PAVD7Ch0MjJtRVn7DtaO2paoKzOfcMnx"
    },
    postB: {
      copy: "When Duolingo starts losing patience with you...",
      image: "https://drive.google.com/uc?export=view&id=1LbDBKRx2bWA2DRGQL9yc8SHiEePvOQoQ"
    }
  },
  {
    team: "ImageTest - Wegmans",
    testType: "Image",
    postA: {
      copy: "Buffalo Chicken Dip, your new game day MVP 🔥🐔⁣ Whether you're hosting or just snacking, this dip never disappoints.",
      image: "https://drive.google.com/uc?export=view&id=1WYkD3rvW5fLbSqR--SIOnFtAmleAIwTe"
    },
    postB: {
      copy: "Buffalo Chicken Dip, your new game day MVP 🔥🐔⁣ Whether you're hosting or just snacking, this dip never disappoints.",
      image: "https://drive.google.com/uc?export=view&id=1aZxOhfztCpoqfGIvT4ZbLkfizEVp7aKh"
    }
  },
  {
    team: "CopyTest - Liquid Death",
    testType: "Copy",
    postA: {
      copy: "teenagers drinking liquid death",
      image: "https://drive.google.com/uc?export=view&id=1aL46AfoFoTvPJ-6o2oFGL3jSi7EgWPrd"
    },
    postB: {
      copy: "Pilot drinking liquid death with passengers",
      image: "https://drive.google.com/uc?export=view&id=1BYYZCtNImAwCwM51HQEr83K2Fb_rCEj7"
    }
  },
  {
    team: "ImageTest - Denny's",
    testType: "Image",
    postA: {
      copy: "Pull up a chair. Stay a while. Whether you're here for the pancakes or the people, you know you're always welcome at our table.",
      image: "https://drive.google.com/uc?export=view&id=1LE798mn_UlxdN3E9q3seupunBvxxhowm"
    },
    postB: {
      copy: "Pull up a chair. Stay a while. Whether you're here for the pancakes or the people, you know you're always welcome at our table.",
      image: "https://drive.google.com/uc?export=view&id=1pFeabC3ivravHfbDfnPoD1cML3biGEK2"
    }
  },
  {
    team: "CopyTest - Liquid Death",
    testType: "Copy",
    postA: {
      copy: "Even better than blood",
      image: "https://drive.google.com/uc?export=view&id=1KtejAuo6_w_plhPdPbTgqNkBormcn8QM"
    },
    postB: {
      copy: "The dead's go-to drink",
      image: "https://drive.google.com/uc?export=view&id=1bg5j3vTbkuxUGFcm0waTeEf-paFQQjvV"
    }
  },
  {
    team: "ImageTest - Liquid Death Skate",
    testType: "Image",
    postA: {
      copy: "Kickflips & cans 💀💧 Hydrating the chaos with #LiquidDeath — murder your thirst, not your vibe. 🛹🔥",
      image: "https://drive.google.com/uc?export=view&id=124nvxQbu2X6hNY6yMdqM1ydWO2uJAKAw"
    },
    postB: {
      copy: "Kickflips & cans 💀💧 Hydrating the chaos with #LiquidDeath — murder your thirst, not your vibe. 🛹🔥",
      image: "https://drive.google.com/uc?export=view&id=1Bsw7F4Vyr-TNmy1JF-wJdPtJR-ER1Tvf"
    }
  },
  {
    team: "ImageTest - Wegmans Fresh",
    testType: "Image",
    postA: {
      copy: "Fresh flavors, unforgettable moments—Wegmans brings the best to your table every day.",
      image: "https://drive.google.com/uc?export=view&id=1slRrocZHObPIW9t8mJDu4WjNVqITfOeo"
    },
    postB: {
      copy: "Fresh flavors, unforgettable moments—Wegmans brings the best to your table every day.",
      image: "https://drive.google.com/uc?export=view&id=13NPr2uEVjyW4Kc0adbqgHzccISEGACEu"
    }
  },
  {
    team: "CopyTest - Jimmy Johns",
    testType: "Copy",
    postA: {
      copy: "Its a big dill 😉🥒",
      image: "https://drive.google.com/uc?export=view&id=1Ks303cXLULMj4hoKk6YDIHGeG8FqIREO"
    },
    postB: {
      copy: "can't talk rn, surfing through flavor space on a #JimmyJohns sub 🌊",
      image: "https://drive.google.com/uc?export=view&id=1EdAe7gBErcxsAcertS6PspT7h_NstH7I"
    }
  },
  {
    team: "ImageTest - Crocs",
    testType: "Image",
    postA: {
      copy: "There's nothing better than Crocs.",
      image: "https://drive.google.com/uc?export=view&id=1I6Y6CU3LHgaLcgpG9TpP1fuVKnHyDS"
    },
    postB: {
      copy: "There's nothing better than Crocs.",
      image: "https://drive.google.com/uc?export=view&id=1eib0pbD0PmhD3xaUpT78rlg6fRd5VOJb"
    }
  },
  {
    team: "ImageTest - Arby's",
    testType: "Image",
    postA: {
      copy: "chicken nuggets are for kids, steak nuggets are for men. Try 'em now, thank us later",
      image: "https://drive.google.com/uc?export=view&id=1xJCPYPiDlSw_rnhV32zzs4Q0cWMv29gY"
    },
    postB: {
      copy: "chicken nuggets are for kids, steak nuggets are for men. Try 'em now, thank us later",
      image: "https://drive.google.com/uc?export=view&id=1QUkNZxL_qwDFqRZnbV3HTeo89y7sG2Ql"
    }
  },
  {
    team: "ImageTest - Liquid Death Metal",
    testType: "Image",
    postA: {
      copy: "Most Metal Way to Stay Hydrated",
      image: "https://drive.google.com/uc?export=view&id=1ZzseUkWRntackRWgS4ePY73XVOjDo7zN"
    },
    postB: {
      copy: "Most Metal Way to Stay Hydrated",
      image: "https://drive.google.com/uc?export=view&id=1VJDNWrwbi6o3r-opxcrgbxS-ouEK6oSO"
    }
  },
  {
    team: "CopyTest - Denny's Existential",
    testType: "Copy",
    postA: {
      copy: "decomposing but make it ✨breakfast✨",
      image: "https://drive.google.com/uc?export=view&id=1BaswOsVhmws_KCTxq6EiSXNElaYC_zF3"
    },
    postB: {
      copy: "The world outside crumbles. Inside, the pancakes whisper, 'You're safe here.'",
      image: "https://drive.google.com/uc?export=view&id=12_6D21iujFZKeTLBqXXBwijgGPUZYggQ"
    }
  },
  {
    team: "ImageTest - Wegmans Ascend",
    testType: "Image",
    postA: {
      copy: "Fresh. Local. Legendary. ✨ You don't just shop at Wegmans. You ascend to better food and brighter meals.",
      image: "https://drive.google.com/uc?export=view&id=1yqwxGU9xGHjIx9A1T4EHxPzsDZO9FIVs"
    },
    postB: {
      copy: "Fresh. Local. Legendary. ✨ You don't just shop at Wegmans. You ascend to better food and brighter meals.",
      image: "https://drive.google.com/uc?export=view&id=1Q-XQbE1ynhDaXHlnyXCp4jDSskTt_lvl"
    }
  }
];

export default function ABTestingVoter() {
  const [currentTest, setCurrentTest] = useState(0);
  const [viewMode, setViewMode] = useState('voting'); // 'voting', 'results', 'summary'
  const [votes, setVotes] = useState({});
  const [hasVoted, setHasVoted] = useState(false);

  const test = ABTestData[currentTest];

  const handleVote = (preference, likelihoodA, likelihoodB) => {
    const newVotes = { ...votes };
    if (!newVotes[currentTest]) {
      newVotes[currentTest] = { preference: {}, likelihoodA: [], likelihoodB: [] };
    }
    
    // Increment preference count
    newVotes[currentTest].preference[preference] = (newVotes[currentTest].preference[preference] || 0) + 1;
    
    // Add likelihood scores
    newVotes[currentTest].likelihoodA.push(likelihoodA);
    newVotes[currentTest].likelihoodB.push(likelihoodB);
    
    setVotes(newVotes);
    setHasVoted(true);
  };

  const nextTest = () => {
    if (currentTest < ABTestData.length - 1) {
      setCurrentTest(currentTest + 1);
      setHasVoted(false);
      setViewMode('voting');
    } else {
      setViewMode('summary');
    }
  };

  const previousTest = () => {
    if (currentTest > 0) {
      setCurrentTest(currentTest - 1);
      setHasVoted(false);
      setViewMode('voting');
    }
  };

  const resetAll = () => {
    setCurrentTest(0);
    setVotes({});
    setHasVoted(false);
    setViewMode('voting');
  };

  if (viewMode === 'summary') {
    return <SummaryView votes={votes} data={ABTestData} onReset={resetAll} />;
  }

  const currentVoteData = votes[currentTest];
  const totalVotes = currentVoteData ? 
    (currentVoteData.preference.A || 0) + (currentVoteData.preference.B || 0) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-orange-600">A/B Test Voting</h1>
              <p className="text-gray-600 mt-1">Test {currentTest + 1} of {ABTestData.length}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">{test.testType} Test</p>
              <p className="text-lg font-semibold text-gray-800">{test.team}</p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-orange-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentTest + 1) / ABTestData.length) * 100}%` }}
            />
          </div>
        </div>

        {viewMode === 'voting' && !hasVoted && (
          <VotingView test={test} onVote={handleVote} />
        )}

        {hasVoted && (
          <ResultsView 
            test={test} 
            voteData={currentVoteData}
            totalVotes={totalVotes}
            onNext={nextTest}
            onPrevious={previousTest}
            isFirst={currentTest === 0}
            isLast={currentTest === ABTestData.length - 1}
          />
        )}
      </div>
    </div>
  );
}

function VotingView({ test, onVote }) {
  const [selectedPreference, setSelectedPreference] = useState(null);
  const [likelihoodA, setLikelihoodA] = useState(3);
  const [likelihoodB, setLikelihoodB] = useState(3);

  const handleSubmit = () => {
    if (selectedPreference) {
      onVote(selectedPreference, likelihoodA, likelihoodB);
    }
  };

  return (
    <div className="space-y-6">
      {/* A/B Post Comparison */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Variant A */}
        <div className={`bg-white rounded-lg shadow-lg overflow-hidden border-4 transition-all ${
          selectedPreference === 'A' ? 'border-orange-600' : 'border-transparent'
        }`}>
          <div className="bg-orange-600 text-white p-4">
            <h3 className="text-xl font-bold">Variant A</h3>
          </div>
          <div className="p-4">
            <img 
              src={test.postA.image} 
              alt="Variant A" 
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-800 text-lg leading-relaxed">{test.postA.copy}</p>
          </div>
          <div className="p-4 bg-gray-50">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              How likely to click? (1-5)
            </label>
            <input
              type="range"
              min="1"
              max="5"
              value={likelihoodA}
              onChange={(e) => setLikelihoodA(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-600 mt-1">
              <span>Not likely</span>
              <span className="font-bold text-orange-600 text-lg">{likelihoodA}</span>
              <span>Very likely</span>
            </div>
          </div>
        </div>

        {/* Variant B */}
        <div className={`bg-white rounded-lg shadow-lg overflow-hidden border-4 transition-all ${
          selectedPreference === 'B' ? 'border-orange-600' : 'border-transparent'
        }`}>
          <div className="bg-gray-700 text-white p-4">
            <h3 className="text-xl font-bold">Variant B</h3>
          </div>
          <div className="p-4">
            <img 
              src={test.postB.image} 
              alt="Variant B" 
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-800 text-lg leading-relaxed">{test.postB.copy}</p>
          </div>
          <div className="p-4 bg-gray-50">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              How likely to click? (1-5)
            </label>
            <input
              type="range"
              min="1"
              max="5"
              value={likelihoodB}
              onChange={(e) => setLikelihoodB(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-600 mt-1">
              <span>Not likely</span>
              <span className="font-bold text-gray-700 text-lg">{likelihoodB}</span>
              <span>Very likely</span>
            </div>
          </div>
        </div>
      </div>

      {/* Voting Buttons */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Which variant would you engage with?</h3>
        <div className="flex gap-4">
          <button
            onClick={() => setSelectedPreference('A')}
            className={`flex-1 py-4 px-6 rounded-lg font-bold text-xl transition-all ${
              selectedPreference === 'A'
                ? 'bg-orange-600 text-white shadow-lg scale-105'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Vote for Variant A
          </button>
          <button
            onClick={() => setSelectedPreference('B')}
            className={`flex-1 py-4 px-6 rounded-lg font-bold text-xl transition-all ${
              selectedPreference === 'B'
                ? 'bg-gray-700 text-white shadow-lg scale-105'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Vote for Variant B
          </button>
        </div>
        
        {selectedPreference && (
          <button
            onClick={handleSubmit}
            className="w-full mt-4 py-3 bg-green-600 text-white rounded-lg font-bold text-lg hover:bg-green-700 transition-all"
          >
            Submit Vote
          </button>
        )}
      </div>
    </div>
  );
}

function ResultsView({ test, voteData, totalVotes, onNext, onPrevious, isFirst, isLast }) {
  const preferenceA = voteData?.preference.A || 0;
  const preferenceB = voteData?.preference.B || 0;
  const percentA = totalVotes > 0 ? ((preferenceA / totalVotes) * 100).toFixed(1) : 0;
  const percentB = totalVotes > 0 ? ((preferenceB / totalVotes) * 100).toFixed(1) : 0;

  const avgLikelihoodA = voteData?.likelihoodA.length > 0 
    ? (voteData.likelihoodA.reduce((a, b) => a + b, 0) / voteData.likelihoodA.length).toFixed(2)
    : 0;
  const avgLikelihoodB = voteData?.likelihoodB.length > 0
    ? (voteData.likelihoodB.reduce((a, b) => a + b, 0) / voteData.likelihoodB.length).toFixed(2)
    : 0;

  const chartData = [
    { name: 'Variant A', Preference: preferenceA, 'Avg Likelihood': parseFloat(avgLikelihoodA) },
    { name: 'Variant B', Preference: preferenceB, 'Avg Likelihood': parseFloat(avgLikelihoodB) },
  ];

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Results</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-orange-50 rounded-lg p-4">
            <h3 className="text-lg font-bold text-orange-600 mb-2">Variant A</h3>
            <p className="text-4xl font-bold text-gray-800">{preferenceA} votes ({percentA}%)</p>
            <p className="text-sm text-gray-600 mt-2">Avg Click Likelihood: {avgLikelihoodA}/5</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Variant B</h3>
            <p className="text-4xl font-bold text-gray-800">{preferenceB} votes ({percentB}%)</p>
            <p className="text-sm text-gray-600 mt-2">Avg Click Likelihood: {avgLikelihoodB}/5</p>
          </div>
        </div>

        {/* Winner Banner */}
        {totalVotes > 0 && (
          <div className={`mt-4 p-4 rounded-lg text-center ${
            preferenceA > preferenceB ? 'bg-orange-600' : 
            preferenceB > preferenceA ? 'bg-gray-700' : 
            'bg-yellow-500'
          } text-white`}>
            <p className="text-2xl font-bold">
              {preferenceA > preferenceB ? '🎉 Variant A Wins!' :
               preferenceB > preferenceA ? '🎉 Variant B Wins!' :
               '🤝 It\'s a Tie!'}
            </p>
          </div>
        )}
      </div>

      {/* Chart */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Visual Comparison</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Preference" fill="#f76902" />
            <Bar dataKey="Avg Likelihood" fill="#4b5563" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Navigation */}
      <div className="flex gap-4">
        <button
          onClick={onPrevious}
          disabled={isFirst}
          className={`px-6 py-3 rounded-lg font-bold ${
            isFirst 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-gray-600 text-white hover:bg-gray-700'
          }`}
        >
          ← Previous Test
        </button>
        <button
          onClick={onNext}
          className="flex-1 px-6 py-3 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700"
        >
          {isLast ? 'View Summary →' : 'Next Test →'}
        </button>
      </div>
    </div>
  );
}

function SummaryView({ votes, data, onReset }) {
  const summaryData = data.map((test, index) => {
    const voteData = votes[index];
    const prefA = voteData?.preference.A || 0;
    const prefB = voteData?.preference.B || 0;
    const total = prefA + prefB;
    const winner = prefA > prefB ? 'A' : prefB > prefA ? 'B' : 'Tie';
    
    return {
      team: test.team,
      testType: test.testType,
      winner,
      totalVotes: total,
      percentA: total > 0 ? ((prefA / total) * 100).toFixed(1) : 0,
      percentB: total > 0 ? ((prefB / total) * 100).toFixed(1) : 0,
    };
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-orange-600 mb-6">A/B Testing Summary</h1>
          
          <div className="space-y-4">
            {summaryData.map((item, index) => (
              <div key={index} className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-gray-800">{item.team}</h3>
                    <p className="text-sm text-gray-600">{item.testType} Test</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-2xl font-bold ${
                      item.winner === 'A' ? 'text-orange-600' :
                      item.winner === 'B' ? 'text-gray-700' :
                      'text-yellow-600'
                    }`}>
                      {item.winner === 'Tie' ? 'Tie' : `Variant ${item.winner} Wins`}
                    </p>
                    <p className="text-sm text-gray-600">
                      A: {item.percentA}% | B: {item.percentB}% | Total votes: {item.totalVotes}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={onReset}
            className="mt-8 w-full py-3 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700"
          >
            Start New Session
          </button>
        </div>
      </div>
    </div>
  );
}