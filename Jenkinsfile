node {
  stage('SCM') {
    checkout scm
  }
  stage('SonarQube Analysis') {
    def scannerHome = tool 'SonarScanner'; // Tên công cụ SonarScanner đã cấu hình trong Jenkins
    withSonarQubeEnv() { // Tích hợp với môi trường SonarQube
      sh "${scannerHome}/bin/sonar-scanner"
    }
  }
}
