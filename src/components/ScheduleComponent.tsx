
import React from 'react';
import { Calendar } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';

interface ScheduleItem {
  id: number;
  title: string;
  day: string;
  time: string;
  image: string;
}

interface ScheduleComponentProps {
  scheduleItems: ScheduleItem[];
}

const ScheduleComponent = ({ scheduleItems }: ScheduleComponentProps) => {
  // Group schedule items by day
  const scheduleByDay = scheduleItems.reduce((acc, item) => {
    if (!acc[item.day]) {
      acc[item.day] = [];
    }
    acc[item.day].push(item);
    return acc;
  }, {} as Record<string, ScheduleItem[]>);

  // Get days of the week in order
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  return (
    <div className="my-12 px-4 sm:px-6 lg:px-12">
      <div className="mb-8 flex items-center">
        <h2 className="text-3xl font-bold text-white">Weekly Schedule</h2>
        <div className="ml-3 p-2 bg-netflix-red rounded-full">
          <Calendar className="h-5 w-5 text-white" />
        </div>
      </div>
      
      <Tabs defaultValue="Monday" className="w-full">
        <TabsList className="bg-netflix-black/80 border border-netflix-gray/20 p-1 mb-6 w-full justify-start overflow-x-auto hide-scrollbar">
          {days.map(day => (
            <TabsTrigger 
              key={day} 
              value={day}
              className="data-[state=active]:bg-netflix-red data-[state=active]:text-white px-6 py-2.5"
            >
              <span className="flex items-center">
                {day}
                {scheduleByDay[day] && scheduleByDay[day].length > 0 && (
                  <span className="ml-2 bg-green-500 w-2 h-2 rounded-full"></span>
                )}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        {days.map(day => (
          <TabsContent 
            key={day} 
            value={day}
            className="bg-gradient-to-b from-netflix-black/95 to-netflix-gray/10 backdrop-blur-sm rounded-lg p-6 border border-netflix-gray/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="h-4 w-1 bg-netflix-red rounded-full mr-3"></div>
              {day}'s Schedule
            </h3>

            {scheduleByDay[day] && scheduleByDay[day].length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {scheduleByDay[day].map(item => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden group"
                  >
                    <div className="flex bg-netflix-black/70 border border-netflix-gray/30 rounded-lg overflow-hidden hover:border-netflix-red/40 transition-all duration-300 transform hover:scale-[1.02]">
                      <div className="relative w-1/3">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-netflix-black/80"></div>
                        {Math.random() > 0.5 && (
                          <div className="absolute top-2 left-2 bg-netflix-red rounded-full px-2 py-0.5 text-[10px] text-white font-bold">
                            NEW
                          </div>
                        )}
                      </div>
                      <div className="w-2/3 p-4">
                        <h4 className="text-white font-medium line-clamp-1">{item.title}</h4>
                        <div className="mt-2 flex items-center">
                          <Calendar className="w-3 h-3 text-netflix-red mr-1.5" />
                          <p className="text-netflix-red text-sm font-bold">{item.time}</p>
                        </div>
                        <div className="flex items-center mt-3">
                          <div className="h-1.5 w-1.5 bg-green-500 rounded-full mr-1.5"></div>
                          <p className="text-green-500/90 text-xs">Airing today</p>
                        </div>
                        <button className="mt-3 bg-netflix-red/90 hover:bg-netflix-red text-white text-xs px-3 py-1 rounded-sm transition-colors duration-200">
                          Set Reminder
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 px-3">
                <div className="w-16 h-16 rounded-full bg-netflix-gray/20 flex items-center justify-center mb-5">
                  <Calendar className="h-8 w-8 text-netflix-gray/50" />
                </div>
                <p className="text-white/50 text-base text-center mb-2">No releases scheduled for {day}</p>
                <p className="text-netflix-gray/70 text-sm text-center max-w-md">Check back later for updates or explore our recommendations below</p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ScheduleComponent;
