import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, CheckCircle, Circle } from 'lucide-react';
import arachnysNavigatorImage from 'figma:asset/ab3ce92244bbcd90e0cb1b8e3427139fced52741.png';

interface ArachnysProjectDetailProps {
  onBack: () => void;
}

export default function ArachnysProjectDetail({ onBack }: ArachnysProjectDetailProps) {
  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto px-8 py-12 pt-16">

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Unifying Report Intelligence with Entity-Centric Design
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-8 text-slate-600">
            <Badge variant="secondary" className="bg-slate-200 text-slate-700">
              UX/UI Designer
            </Badge>
            <span>Q1 2020</span>
            <span className="font-semibold text-slate-800">Arachnys</span>
            <span className="text-indigo-600">Enterprise Software</span>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">🧭 Project Overview</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-slate-600 mb-6">
                Arachnys offers investigative and risk assessment software for financial institutions, allowing users to generate subject-based reports. However, its legacy Navigator system lacked clarity on whether multiple reports referenced the same real-world entity—creating user confusion and limiting data aggregation.
              </p>
              
              <p className="text-lg leading-relaxed text-slate-600 mb-6">
                Brought on for a short-term contract, I was tasked with initiating UX integration between Arachnys' two core systems to make reports entity-aware, streamline subject creation, and display report history within entity profiles.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://arachnys.com', '_blank')}
                  className="text-slate-600 hover:text-slate-900"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  arachnys.com
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">📊 System Architecture</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-slate-600 mb-6">
                The challenge involved unifying two distinct systems with different data models:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-4 border-l-4 border-l-red-500 bg-red-50">
                  <h3 className="font-semibold text-slate-900 mb-2">Navigator (Legacy)</h3>
                  <p className="text-slate-600">Report-based system with fragmented data stored by text-only "subject" entries</p>
                </div>
                <div className="p-4 border-l-4 border-l-green-500 bg-green-50">
                  <h3 className="font-semibold text-slate-900 mb-2">Flow (Modern)</h3>
                  <p className="text-slate-600">Entity-centric platform with unique IDs, relationships, and complete profile histories</p>
                </div>
              </div>

              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-slate-700 text-center font-medium">
                  <strong>Key Challenge:</strong> No real-time sync or relationship existed between the two systems
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">🎯 Objectives</h2>
          <Card>
            <CardContent className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Enable entity-aware reporting:</strong> Ensure each new report in Navigator is linked to a centralized entity in Flow.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Simplify subject creation:</strong> Provide seamless workflows to search, match, or create entities from within Navigator.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Visualize report history:</strong> Add a Reports tab to Flow profiles to provide report lineage and traceability.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">🧪 Research &amp; Discovery</h2>
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Stakeholder Collaboration:</h3>
              <p className="text-lg leading-relaxed text-slate-600 mb-6">
                Worked directly with product managers, engineers, and the design lead to understand backend constraints and user frustrations around fragmented report data.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">Pain Points Identified:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-red-500 mt-2 flex-shrink-0" />
                  <div>No central knowledge of whether reports referred to the same subject</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-orange-500 mt-2 flex-shrink-0" />
                  <div>High risk of duplication (e.g., 7 reports named "Mahan Air" could be unrelated or the same)</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-yellow-500 mt-2 flex-shrink-0" />
                  <div>Users lacked the ability to view a holistic report history per entity</div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">💡 Strategy &amp; Planning</h2>
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Subject Search UX Overhaul:</h3>
              <p className="text-lg leading-relaxed text-slate-600 mb-4">
                Redesigned the subject entry field in Navigator to return smart entity suggestions from Flow:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                  <div><strong>Live search dropdown</strong> showing name, ID, country, and report count</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-blue-500 mt-2 flex-shrink-0" />
                  <div><strong>CTA for new entity</strong> guiding users to create new entities in Flow when no match is found</div>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">Entity Profile Integration:</h3>
              <p className="text-lg leading-relaxed text-slate-600 mb-4">
                Designed a new "Reports" tab for Flow's entity profile:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-purple-500 mt-2 flex-shrink-0" />
                  <div>Lists all reports linked to the entity</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-indigo-500 mt-2 flex-shrink-0" />
                  <div>Shows metadata: report name, creation date, last modified, and other linked subjects</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-pink-500 mt-2 flex-shrink-0" />
                  <div>Supports many-to-one relationships (multiple reports per subject, and multiple subjects per report)</div>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">End-to-End UX Flow:</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 text-center bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">1</div>
                  <h4 className="font-semibold text-slate-900 mb-1">Start</h4>
                  <p className="text-sm text-slate-600">User begins a report in Navigator</p>
                </div>
                <div className="p-4 text-center bg-green-50 rounded-lg">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
                  <h4 className="font-semibold text-slate-900 mb-1">Search</h4>
                  <p className="text-sm text-slate-600">Autocomplete shows entity matches</p>
                </div>
                <div className="p-4 text-center bg-purple-50 rounded-lg">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">3</div>
                  <h4 className="font-semibold text-slate-900 mb-1">Create</h4>
                  <p className="text-sm text-slate-600">If no match, CTA to Flow to create entity</p>
                </div>
                <div className="p-4 text-center bg-orange-50 rounded-lg">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">4</div>
                  <h4 className="font-semibold text-slate-900 mb-1">Link</h4>
                  <p className="text-sm text-slate-600">Upon creation, user returns to Navigator and links the report</p>
                </div>
                <div className="p-4 text-center bg-pink-50 rounded-lg lg:col-span-2">
                  <div className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">5</div>
                  <h4 className="font-semibold text-slate-900 mb-1">Sync</h4>
                  <p className="text-sm text-slate-600">Report updates populate dynamically in Flow's report tab</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">🖼️ Navigator Interface</h2>
          <Card>
            <CardContent className="p-8">
              <div className="mb-4 flex justify-center">
                <img
                  src={arachnysNavigatorImage}
                  alt="Navigator UI screenshot showing reports filtered view"
                  className="max-w-full h-auto rounded-lg shadow-lg object-contain"
                  style={{ maxHeight: '70vh' }}
                />
              </div>
              <p className="text-center text-slate-500 text-sm max-w-2xl mx-auto">
                Navigator UI screenshot – reports filtered view showing the legacy interface and entity-aware reporting integration
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">🎨 Design Execution</h2>
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Tools Used:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                  <div><strong>Figma:</strong> Component-based wireframes and clickable flows</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                  <div><strong>Sketch:</strong> Quick mock iterations</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                  <div><strong>Zoom &amp; Slack:</strong> Remote whiteboarding with PMs and tech leads</div>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Design Deliverables:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-blue-500 mt-2 flex-shrink-0" />
                  <div>Search dropdown component design with UX edge cases handled</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                  <div>New Entity CTA flow with split paths for Organization vs. Individual</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-purple-500 mt-2 flex-shrink-0" />
                  <div>Reports tab layout for profile view—grouped by active/completed, sorted by recency</div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">📈 Outcomes &amp; Impact</h2>
          <Card>
            <CardContent className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Streamlined Workflow:</strong> Reduced time to create and associate subjects in reports
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Improved Data Integrity:</strong> Reports now link to unique entity IDs, preventing duplication
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Foundation for Aggregation:</strong> Paved the way for entity-based analytics and risk intelligence
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">🔍 Reflections</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-slate-600">
                This project highlighted the importance of unifying fragmented data across legacy systems with a UX-first approach. By anchoring reports to real-world entities and creating a two-way interaction between Navigator and Flow, Arachnys took the first step toward an entity-centric future. It was a rewarding challenge to work across product and tech constraints, harmonize dual-system logic, and elevate the reporting experience with clarity and structure.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}