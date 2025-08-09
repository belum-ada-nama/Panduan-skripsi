import Leaderboard from "../components/LeadeardBorad";

function LeaderboardPage() {
    const students = [
        { name: 'Syarif', completedChapters: 3 },
        { name: 'Dila', completedChapters: 3 },
        { name: 'Teguh', completedChapters: 3 },
        { name: 'Nazar', completedChapters: 3 },
        { name: 'Haldies', completedChapters: 2 },
        { name: 'Eyo', completedChapters: 3 },
      ];
  return (
    <div>
        <Leaderboard students={students} /></div>
  )
}

export default LeaderboardPage