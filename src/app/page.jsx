import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; 
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

const featuresOne = [
  "Hassle free calls anytime all the time!",
  "Easy to use and navigae ui!",
  "Premium features at cheap cost!",
  "Recurring meetings anytime anywhere!",
  "Meeting calendar also available!",
  "Google Calendar implementation!",
]

function ListMaker({ list }) {
  return (
    <ul className="flex flex-col gap-3 list-disc p-7">
      {
        list.map((item, index) => (
          <li key={index}>{item}</li>
        ))
      }
    </ul>
  )
}

function CreateCard({ title, description, list, cta }) { 
  return (
    <Card className='flex items-center flex-col'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Card{description}</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent>
       <ListMaker list={list} />
      </CardContent>
      <CardContent>
        <Button variant='secondary' className='text-text hover:border-[#ffffff]'>
          {cta}
        </Button>
      </CardContent>
    </Card>
  )
}

export default function LandingPage() {
  return (
    <main className="flex flex-col gap-[5%] min-h-[100vh] items-center">
      <div className="flex w-[80%] h-[500px] items-center justify-center px-[7%] my-[14.7%] gap-10">
        <div className="flex items-start flex-col gap-10">
          <h1 className="text-6xl font-[800]">
            Welcome to
            <span className="text-primary">
              {' Omallia! '}
            </span><br />
            Connect with your loved ones!
          </h1>
          <Button className='text-[1.2rem]'>
            <Link href='sign-in'>Get Started</Link>
          </Button>
        </div>
        <div className="h-[450px] w-[500px] bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-[30px]">

        </div>
      </div>

      <div className=" flex w-[100vw] justify-start items-center flex-col gap-10">
        <h2 className="text-4xl font-[500]">
          Video calling for as long as you want!
        </h2>
        <div className="flex gap-10">
          <CreateCard 
            title='Features!'
            description='These are the features you can use with Omalia!'
            list={featuresOne}
            cta='Try Now!'
          />
          <CreateCard 
            title='Features!'
            description='These are the features you can use with Omalia!'
            list={featuresOne}
            cta='Try Now!'
          />
          <CreateCard 
            title='Features!'
            description='These are the features you can use with Omalia!'
            list={featuresOne}
            cta='Try Now!'
          />
        </div>
      </div>
    </main>
  );
}
