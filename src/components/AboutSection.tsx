import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { User, Target, Lightbulb, Users } from 'lucide-react';

export default function AboutSection() {
  const skills = [
    "User Research", "Information Architecture", "Interaction Design", 
    "Prototyping", "Usability Testing", "Design Systems", "Figma", "Sketch"
  ];

  const values = [
    {
      icon: User,
      title: "User-Centered",
      description: "Every design decision is grounded in user needs and behaviors"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Aligning design solutions with business objectives and user goals"
    },
    {
      icon: Lightbulb,
      title: "Innovation-Driven",
      description: "Exploring creative solutions while maintaining usability standards"
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Working closely with cross-functional teams to deliver great products"
    }
  ];

  return (
    <section id="about" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="bg-black text-white mb-6">
            About Me
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-8">
            Passionate about creating
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              meaningful experiences
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a UX Designer with a passion for solving complex problems through thoughtful design. 
            With experience across web applications, mobile apps, and design systems, I bring a 
            strategic approach to every project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-black mb-4">
                My Approach
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I believe great design happens when we truly understand our users and their needs. 
                My process always starts with research, followed by collaborative ideation, 
                rapid prototyping, and iterative testing.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Currently working at Threecolts, where I'm helping to redesign and rebuild 
                core platform experiences for e-commerce sellers and agencies worldwide.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-black mb-4">Skills & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-white border border-gray-200 text-gray-700">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-4">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-black">
                      {value.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}