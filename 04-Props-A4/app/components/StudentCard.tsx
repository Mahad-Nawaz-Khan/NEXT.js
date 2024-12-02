interface StudentDetails {
  Name: string;
  Image?: string;
  Age: number | string;
  Class: string;
  Course: string;
  RollNo: string | number;
}



export default function Card({
  Name = "Not Specified",
  Image = "https://via.placeholder.com/150",
  Age = "Not Specified",
  Class = "Not Specified",
  Course = "Not Specified",
  RollNo = "Not Specified",
}: StudentDetails) {
  return (
    <div className="shadow-lg hover:scale-105 duration-200 bg-blue-950 bg-opacity-50 select-none rounded-2xl p-4 min-w-full max-w-lg mx-auto flex items-center gap-6">
      <img
        src={Image}
        alt={Name}
        className="rounded-3xl w-24 h-24 object-cover border-2 border-gray-200"
      />
      <div className="text-sm text-white flex-grow">
        <h1 className="text-lg font-semibold text-white mb-2">{Name.toUpperCase()}</h1>
        <div className="grid grid-cols-2 gap-1">
          <p>
            <strong>Age:</strong> {Age}
          </p>
          <p>
            <strong>Class:</strong> {Class}
          </p>
          <p>
            <strong>Course:</strong> {Course}
          </p>
          <p>
            <strong>Roll No:</strong> {RollNo}
          </p>
        </div>
      </div>
    </div>
  );
}
