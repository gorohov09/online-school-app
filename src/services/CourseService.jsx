class CourseService {
    _apiBase = 'http://localhost:5259/api/';

    getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        return JSON.parse(tokenString);
    }

    getResource = async (url) => {
        let res = await fetch(url, {
            metthod: 'GET',
            headers: {
                'Authorization': 'Bearer ' + this.getToken()
            }
        });
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    saveCourse = async (data) => {
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getToken()
            },
            body: JSON.stringify(data)
        };

        let res = await fetch(this._apiBase + 'course/create', requestOptions);

        if (!res.ok) {
            throw new Error(`status: ${res.status}`);
        }
        
        return await res.json();
    }

    saveModule = async (data, courseId) => {
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getToken()
            },
            body: JSON.stringify(data)
        };

        let res = await fetch(this._apiBase + `course/${courseId}/addModule`, requestOptions);

        if (!res.ok) {
            throw new Error(`status: ${res.status}`);
        }
        
        return await res.json();
    }

    saveLesson = async (data, moduleId) => {
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getToken()
            },
            body: JSON.stringify(data)
        };

        let res = await fetch(this._apiBase + `course/module/${moduleId}/addLesson`, requestOptions);

        if (!res.ok) {
            throw new Error(`status: ${res.status}`);
        }
        
        return await res.json();
    }

    saveTask = async (data, lessonId) => {
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getToken()
            },
            body: JSON.stringify(data)
        };

        let res = await fetch(this._apiBase + `course/lesson/${lessonId}/addTask`, requestOptions);

        if (!res.ok) {
            throw new Error(`status: ${res.status}`);
        }
        
        return await res.json();
    }

    getCourseById = async (id) => {
        const res = await this.getResource(this._apiBase + `course/${id}`);
        console.log(res);
        return res;
    }

    getLessonById = async (id) => {
        const res = await this.getResource(this._apiBase + `lesson/${id}`);
        return res;
    }

    getTeacherCourses = async () => {
        const res = await this.getResource(this._apiBase + `course/teacherCourses`);
        return res;
    }

    getFirstLessonByCourse = async (courseId) => {
        const res = await this.getResource(this._apiBase + `lesson/firstLesson/${courseId}`);
        return res;
    }

}

export default CourseService;