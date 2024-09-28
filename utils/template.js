module.exports = function (data) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Enquiry Submission</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        margin: 0;
        padding: 20px;
        background-color: #f9f9f9;
      }
      .email-container {
        max-width: 600px;
        margin: 0 auto;
        background: #fff;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 10px;
      }
      .email-header {
        text-align: center;
        margin-bottom: 20px;
      }
      h2 {
        color: #e3010f;
      }
      .row {
        margin-bottom: 10px;
      }
      .row label {
        font-weight: bold;
      }
      .row span {
        color: #555;
      }
      .table {
        width: 100%;
        border-collapse: collapse;
      }
      .table th,
      .table td {
        padding: 8px;
        text-align: left;
        border: 1px solid #ddd;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="email-header">
        <h2>New Enquiry Submitted</h2>
        <p>Details of the enquiry are provided below:</p>
      </div>

      <div class="row"><label>Name:</label> <span>${data.name}</span></div>
      <div class="row">
        <label>Date of Birth:</label> <span>${data.dob}</span>
      </div>
      <div class="row">
        <label>Contact:</label> <span>${data.contact}</span>
      </div>
      <div class="row">
        <label>Email:</label> <span>${data.email}</span>
      </div>
      <div class="row">
        <label>Address:</label> <span>${data.address}</span>
      </div>
      <div class="row">
        <label>Reference:</label> <span>${data.reference}</span>
      </div>
      <div class="row">
        <label>Enquiry Type:</label>
        <span>${data.enquiry_type}</span>
      </div>
      <div class="row">
        <label>Country Preference:</label>
        <span>${data.country_preference}</span>
      </div>
      <div class="row">
        <label>Language Proficiency:</label> <span>${data.language}</span>
      </div>

      <div class="row">
        <h4>Scores Achieved</h4>
        <p><strong>Listening:</strong> ${data.listening_score}</p>
        <p><strong>Reading:</strong> ${data.reading_score}</p>
        <p><strong>Writing:</strong> ${data.writing_score}</p>
        <p><strong>Speaking:</strong> ${data.speaking_score}</p>
        <p><strong>Overall:</strong> ${data.overall_score}</p>
      </div>

      <div class="row">
        <h4>Qualifications</h4>
        <table class="table">
          <thead>
            <tr>
              <th>Qualification</th>
              <th>Year</th>
              <th>Percentage</th>
              <th>Stream</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Matriculation (10th)</td>
              <td>${data.matric_year || '-'}</td>
              <td>${data.matric_percentage || '-'}</td>
              <td>${data.matric_stream || '-'}</td>
            </tr>
            <tr>
              <td>Senior Secondary (10+2)</td>
              <td>${data.secondary_year || '-'}</td>
              <td>${data.secondary_percentage || '-'}</td>
              <td>${data.secondary_stream || '-'}</td>
            </tr>
            <tr>
              <td>Graduation</td>
              <td>${data.grad_year || '-'}</td>
              <td>${data.grad_percentage || '-'}</td>
              <td>${data.grad_stream || '-'}</td>
            </tr>
            <tr>
              <td>Post Graduation</td>
              <td>${data.postgrad_year || '-'}</td>
              <td>${data.postgrad_percentage || '-'}</td>
              <td>${data.postgrad_stream || '-'}</td>
            </tr>
            <tr>
              <td>Diploma (if any)</td>
              <td>${data.diploma_year || '-'}</td>
              <td>${data.diploma_percentage || '-'}</td>
              <td>${data.diploma_stream || '-'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="row">
        <h4>Work Experience</h4>
        <table class="table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Job Title</th>
              <th>Company Name & Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${data.job_year_1 || '-'}</td>
              <td>${data.job_title_1 || '-'}</td>
              <td>${data.job_company_1 || '-'}</td>
            </tr>
            <tr>
              <td>${data.job_year_2 || '-'}</td>
              <td>${data.job_title_2 || '-'}</td>
              <td>${data.job_company_2 || '-'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </body>
</html>
`;
};
