import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

interface HorizonsDataDisplayProps {
  data: any
  title?: string
  icon?: React.ReactNode
}

export function HorizonsDataDisplay({ data, title = "Results", icon }: HorizonsDataDisplayProps) {
  if (!data) return null

  const parseObjectData = (result: string) => {
    const sections: { [key: string]: string[] } = {}
    const lines = result.split('\n')
    let currentSection = 'header'
    
    lines.forEach((line) => {
      if (line.includes('*****')) return
      if (line.includes('EPOCH=') || line.includes('IAU76')) {
        currentSection = 'orbital_elements'
      } else if (line.includes('physical parameters')) {
        currentSection = 'physical_parameters'
      } else if (line.includes('comments:')) {
        currentSection = 'comments'
      }
      
      if (!sections[currentSection]) sections[currentSection] = []
      if (line.trim()) sections[currentSection].push(line.trim())
    })
    
    return sections
  }

  const renderValue = (key: string, value: string) => {
    const match = value.match(/([A-Z_]+)=\s*(.+)/)
    if (match) {
      return (
        <div key={key} className="flex justify-between py-2 border-b border-border/30 last:border-0">
          <span className="font-medium text-muted-foreground">{match[1]}</span>
          <span className="font-mono text-sm">{match[2]}</span>
        </div>
      )
    }
    return (
      <div key={key} className="py-1 text-sm text-muted-foreground">
        {value}
      </div>
    )
  }

  const renderSection = (sectionName: string, lines: string[]) => {
    const displayName = sectionName.replace(/_/g, ' ').toUpperCase()
    return (
      <div className="space-y-2">
        <h3 className="text-lg font-semibold capitalize flex items-center gap-2">
          {displayName}
          <Badge variant="secondary">{lines.length}</Badge>
        </h3>
        <div className="bg-background/50 rounded-lg p-4 space-y-1">
          {lines.map((line, idx) => renderValue(`${sectionName}-${idx}`, line))}
        </div>
      </div>
    )
  }

  const resultText = data.result || JSON.stringify(data, null, 2)
  const sections = parseObjectData(resultText)

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        {icon}
        {title}
      </h2>
      
      <Tabs defaultValue="formatted" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="formatted">Formatted View</TabsTrigger>
          <TabsTrigger value="raw">Raw Data</TabsTrigger>
        </TabsList>
        
        <TabsContent value="formatted" className="space-y-6">
          {Object.entries(sections).map(([name, lines]) => (
            <div key={name}>
              {renderSection(name, lines)}
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="raw">
          <pre className="bg-background/50 p-4 rounded-lg overflow-auto max-h-[600px] text-sm font-mono">
            {resultText}
          </pre>
        </TabsContent>
      </Tabs>
    </Card>
  )
}
