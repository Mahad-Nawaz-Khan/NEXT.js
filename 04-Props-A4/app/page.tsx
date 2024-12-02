import Card from "./components/StudentCard";

export default function Home() {
  return (
    <div className="select-none duration-300">
      <div className="flex justify-center">
        <h1 className="bg-black w-96  text-center border-x-4 h-max rounded-b-full border-b-4
                       text-white duration-300 p-2 px-10 py-5 mb-7 text-3xl font-bold inline-block">
          STUDENT CARDS
        </h1>
      </div>
      <div className="grid grid-cols-1 custom703:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <Card Name="Damuri" Age="0.002" Class="Every" Course="Flying" RollNo={23} Image="/images/Damuri.jpg"/>
        <Card Name="Hasso" Age={56} Class="King" Course="Bobzy Special" RollNo={216851} Image="/images/Hasso.jpg"/>
        <Card Name="Shadab" Age={80} Class="Roti Gang" Course="No More Full tosses" RollNo={654} Image="/images/shady.jpg"/>
        <Card Name="Azam" Age={25} Class="Dietary" Course="Self Control" RollNo={687} Image="/images/Azam.jpg"/>
        <Card Name="Daniyal" Age={24} Class="Behaviour" Course="Anger Managment" RollNo={44696} Image="/images/dani.jpg"/>
        <Card Name="Ali" Age={23} Class="First Year" Course="Computer Science" RollNo={39}/>
        <Card Name="Junaid" Age={24} Class="Second Year" Course="Pre-Engineering" RollNo={38}/>
        <Card Name="Arif" Age={25} Class="Third Year" Course="Mathematics" RollNo={37}/>
        <Card Name="Umar" Age={23} Class="Fourth Year" Course="Physics" RollNo={36}/>
        <Card Name="Saim" Age={24} Class="Fifth Year" Course="Chemistry" RollNo={35}/>
      </div>
    </div>
  );
}

