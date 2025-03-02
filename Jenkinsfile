
pipeline {
    agent any

    environment {
        GIT_REPO_URL = 'https://github.com/njanfang/my-node-app.git'  // GitHub repository URL
        LOCAL_DIR = '/var/my-node-app'                    // Path to your local directory on Linode
    }

    stages {
        stage('Checkout') {
            steps {
                // Clean the workspace and clone the GitHub repository
                deleteDir()  // Clean up any previous workspace content
                git url: "${GIT_REPO_URL}", branch: 'main'
                sh 'git config --global --add safe.directory /var/lib/jenkins/workspace/my-node-app'
            }
        }
        
        stage('Sync Local and Remote') {
            steps {
                script {
                    // SSH into Linode and pull the changes from the GitHub repo to /var/nodeapp
                    sh '''#!/bin/bash
                    cd ${LOCAL_DIR} || exit
                    git pull origin main  # Pull the latest changes from GitHub to the local directory
                    '''
                }
            }
        }
        
        stage('Deploy/Build') {
            steps {
                script {
                    // Here you would run your deployment steps, e.g., npm install, tests, etc.
                    sh '''#!/bin/bash
                    cd ${LOCAL_DIR} || exit
                    npm install            # Install dependencies if needed
                    npm run build          # Or run build script
                    '''
                }
            }
        }

        stage('Push Changes') {
            steps {
                script {
                    // If you made any changes locally, you can push them to GitHub
                    sh '''#!/bin/bash
                    cd ${LOCAL_DIR} || exit
                    git add .                # Add changes
                    git commit -m "Sync updates from Linode to GitHub"  # Commit changes
                    git push origin main      # Push changes back to GitHub
                    '''
                }
            }
        }
    }

    post {
        always {
            // Clean up or notify on success/failure
            echo 'Pipeline completed.'
        }
    }
}
