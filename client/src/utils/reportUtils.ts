// Utility functions for generating report data and downloads

export interface SurveyData {
  tripCount: number;
  averageDuration: number;
  modeShare: {
    car: number;
    bus: number;
    metro: number;
    walk: number;
    bicycle: number;
  };
  regionalData: {
    northeast: number;
    southeast: number;
    midwest: number;
    southwest: number;
    west: number;
    pacific: number;
  };
}

// Mock survey data - in a real app this would come from an API
export const getSurveyData = (): SurveyData => ({
  tripCount: 12847,
  averageDuration: 28.5,
  modeShare: {
    car: 38,
    bus: 22,
    metro: 18,
    walk: 15,
    bicycle: 7
  },
  regionalData: {
    northeast: 2847,
    southeast: 3124,
    midwest: 2156,
    southwest: 2894,
    west: 1623,
    pacific: 803
  }
});

export const generateCSV = (data: SurveyData): string => {
  const csvRows = [
    // Header
    'Survey Data Report',
    '',
    'Summary Statistics',
    'Metric,Value',
    `Total Trip Count,${data.tripCount}`,
    `Average Duration (minutes),${data.averageDuration}`,
    '',
    'Transport Mode Share (%)',
    'Mode,Percentage',
    `Car,${data.modeShare.car}%`,
    `Bus,${data.modeShare.bus}%`,
    `Metro,${data.modeShare.metro}%`,
    `Walk,${data.modeShare.walk}%`,
    `Bicycle,${data.modeShare.bicycle}%`,
    '',
    'Regional Trip Distribution',
    'Region,Trip Count',
    `Northeast,${data.regionalData.northeast}`,
    `Southeast,${data.regionalData.southeast}`,
    `Midwest,${data.regionalData.midwest}`,
    `Southwest,${data.regionalData.southwest}`,
    `West,${data.regionalData.west}`,
    `Pacific,${data.regionalData.pacific}`,
    '',
    `Report Generated: ${new Date().toLocaleString()}`
  ];

  return csvRows.join('\n');
};

export const downloadCSV = (filename: string = 'survey-data-report') => {
  const data = getSurveyData();
  const csvContent = generateCSV(data);
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

export const generatePDFContent = (data: SurveyData): string => {
  // Generate HTML content for PDF
  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Survey Data Report</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            text-align: center;
            border-bottom: 2px solid #2563eb;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .header h1 {
            color: #1e40af;
            margin: 0;
            font-size: 2.5em;
        }
        .section {
            margin-bottom: 30px;
            padding: 20px;
            background: #f8fafc;
            border-radius: 8px;
            border-left: 4px solid #3b82f6;
        }
        .section h2 {
            color: #1e40af;
            margin-top: 0;
            font-size: 1.5em;
        }
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin: 20px 0;
        }
        .stat-card {
            background: white;
            padding: 15px;
            border-radius: 6px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .stat-value {
            font-size: 2em;
            font-weight: bold;
            color: #1e40af;
        }
        .stat-label {
            color: #64748b;
            font-size: 0.9em;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #e2e8f0;
        }
        th {
            background: #f1f5f9;
            color: #1e40af;
            font-weight: 600;
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e2e8f0;
            color: #64748b;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Survey Data Report</h1>
        <p>Transportation Analytics & Summary Statistics</p>
    </div>
    
    <div class="section">
        <h2>Key Metrics Summary</h2>
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-value">${data.tripCount.toLocaleString()}</div>
                <div class="stat-label">Total Trips Recorded</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${data.averageDuration} min</div>
                <div class="stat-label">Average Trip Duration</div>
            </div>
        </div>
    </div>
    
    <div class="section">
        <h2>Transport Mode Distribution</h2>
        <table>
            <thead>
                <tr>
                    <th>Transportation Mode</th>
                    <th>Share Percentage</th>
                    <th>Estimated Trips</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Private Car</td>
                    <td>${data.modeShare.car}%</td>
                    <td>${Math.round((data.tripCount * data.modeShare.car) / 100).toLocaleString()}</td>
                </tr>
                <tr>
                    <td>Public Bus</td>
                    <td>${data.modeShare.bus}%</td>
                    <td>${Math.round((data.tripCount * data.modeShare.bus) / 100).toLocaleString()}</td>
                </tr>
                <tr>
                    <td>Metro/Subway</td>
                    <td>${data.modeShare.metro}%</td>
                    <td>${Math.round((data.tripCount * data.modeShare.metro) / 100).toLocaleString()}</td>
                </tr>
                <tr>
                    <td>Walking</td>
                    <td>${data.modeShare.walk}%</td>
                    <td>${Math.round((data.tripCount * data.modeShare.walk) / 100).toLocaleString()}</td>
                </tr>
                <tr>
                    <td>Bicycle</td>
                    <td>${data.modeShare.bicycle}%</td>
                    <td>${Math.round((data.tripCount * data.modeShare.bicycle) / 100).toLocaleString()}</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div class="section">
        <h2>Regional Distribution</h2>
        <table>
            <thead>
                <tr>
                    <th>Region</th>
                    <th>Trip Count</th>
                    <th>Percentage of Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Northeast</td>
                    <td>${data.regionalData.northeast.toLocaleString()}</td>
                    <td>${((data.regionalData.northeast / data.tripCount) * 100).toFixed(1)}%</td>
                </tr>
                <tr>
                    <td>Southeast</td>
                    <td>${data.regionalData.southeast.toLocaleString()}</td>
                    <td>${((data.regionalData.southeast / data.tripCount) * 100).toFixed(1)}%</td>
                </tr>
                <tr>
                    <td>Midwest</td>
                    <td>${data.regionalData.midwest.toLocaleString()}</td>
                    <td>${((data.regionalData.midwest / data.tripCount) * 100).toFixed(1)}%</td>
                </tr>
                <tr>
                    <td>Southwest</td>
                    <td>${data.regionalData.southwest.toLocaleString()}</td>
                    <td>${((data.regionalData.southwest / data.tripCount) * 100).toFixed(1)}%</td>
                </tr>
                <tr>
                    <td>West</td>
                    <td>${data.regionalData.west.toLocaleString()}</td>
                    <td>${((data.regionalData.west / data.tripCount) * 100).toFixed(1)}%</td>
                </tr>
                <tr>
                    <td>Pacific</td>
                    <td>${data.regionalData.pacific.toLocaleString()}</td>
                    <td>${((data.regionalData.pacific / data.tripCount) * 100).toFixed(1)}%</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div class="footer">
        <p>Report generated on ${new Date().toLocaleString()}</p>
        <p>NATPAC Transportation Analytics Dashboard</p>
    </div>
</body>
</html>`;
};

export const downloadPDF = (filename: string = 'survey-data-report') => {
  const data = getSurveyData();
  const htmlContent = generatePDFContent(data);
  
  // Create a new window to print as PDF
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    
    // Wait for content to load then trigger print
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print();
      }, 500);
    };
  }
};