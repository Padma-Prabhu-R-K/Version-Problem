var Versions = [
    {
        Name: 'Windows 1.01',
        Released: new Date('11-20-1985'),
        Version: '1.01',
        Features: 'Windows 1.0 .. clipboard, calendar',
        type: 'patch',
        Bug: {
            bug: 'GUI is not clear',
            Bug_ID: '13121623'
        } ,
        Author: 'Bill Gates',
        Architecture: 'x86-16'
    },
    {
        Name: 'Windows 1.02',
        Released: new Date('05-14-1986'),
        Version: '1.02',
        Features: 'Windows 1.02 .. clock, control panel',
        type: 'patch',
        Bug: {
            bug: 'Ms-Dos is not suitable for higher bit servers',
            Bug_ID: '21242325'
        } ,
        Author: 'William H. Gates III',
        Architecture: 'x86-16'
    },
    {
        Name: 'Windows 1.03',
        Released: new Date('08-21-1986'),
        Version: '1.03',
        Features: 'Windows 1.03 .. clock, control panel, Notepad editor',
        type: 'enhancement',
        Bug: {
            bug: 'not edible for personal computers and public use',
            Bug_ID: '25367245'
        } ,
        Author: 'Steven A. Ballmer',
        Architecture: 'x86-16'
    },
    {
        Name: 'Windows 1.04',
        Released: new Date('04-10-1987'),
        Version: '1.04',
        Features: 'Windows 1.04 .. Windows Write and Windows Paint',
        type: 'enhancement',
        Bug: {
            bug: 'Lagging for many users to take to type',
            Bug_ID: '25367265'
        } ,
        Author: 'Bradford L. Smith',
        Architecture: 'x86-16'
    },
    {
        Name: 'Windows 2.01',
        Released: new Date('12-09-1987'),
        Version: '2.01',
        Features: 'Windows 2.01 have Desktop icons and Expanded Memory',
        type: 'major',
        Bug: {
            bug: 'More Memory usage leads to Hanging of PC',
            Bug_ID: '16231312'
        } ,
        Author: 'Raymond V. Gilmartin',
        Architecture: 'x86-16, IA-32'
    },
    {
        Name: 'Windows 2.03',
        Released: new Date('12-09-1987'),
        Version: '2.03',
        Features: 'Windows 2.03 have Improved graphics support,that one can overlap windows',
        type: 'enhancement',
        Bug: {
            bug: 'Overhanging lead to Formatting of Data',
            Bug_ID: '23252124'
        } ,
        Author: 'William H. Gates III',
        Architecture: 'x86-16, IA-32'
    },
    {
        Name: 'Windows 2.1',
        Released: new Date('05-27-1988'),
        Version: '2.10',
        Features: 'Windows 2.1 Controls the screen layout, and use keyboard shortcuts to speed up your work',
        type: 'patch',
        Bug: {
            bug: 'Can work only in one windows',
            Bug_ID: '23251242'
        } ,
        Author: 'Peter S. Klein',
        Architecture: 'x86-16, IA-32'
    },
    {
        Name: 'Windows 2.11',
        Released: new Date('03-13-1989'),
        Version: '2.11',
        Features: 'Windows 2.11.. More windows, more speed',
        type: 'patch',
        Bug: {
            bug: 'File Memory is not expensible',
            Bug_ID: '23251243'
        } ,
        Author: 'Stephen J. Luczo',
        Architecture: 'x86-16, IA-32'
    },
    {
        Name: 'Windows 3.0',
        Released: new Date('05-22-1990'),
        Version: '3.00',
        Features: 'Windows 3.0 has significantly better performance, advanced graphics with 16 colors, Program Manager, File Manager, and Print Manager arrive in Windows 3.0.',
        type: 'major',
        Bug: {
            bug: 'Graphics might be slow some times',
            Bug_ID: '23161213'
        } ,
        Author: 'Bill Gates',
        Architecture: 'x86-16, IA-32'
    },
    {
        Name: 'Windows 3.1',
        Released: new Date('04-06-1992'),
        Version: '3.10',
        Features: 'Windows 3.1 grows with the release of a new Windows software development kit (SDK), which helps software developers focus more on writing programs and less on writing device drivers',
        type: 'patch',
        Bug: {
            bug: 'Not suitable for Extensible users',
            Bug_ID: '23161224'
        },
        Author: 'Bill Gates',
        Architecture: 'x86-16, IA-32'
    }
]

// console.log('Versions:',Versions)

console.log("------------------------------------------------------------------------------------------------------------------------------------------- ")
array1 = []
count = 0


// 1.Function for No. of versions released on particular "YEAR"

function findByYear(year) {
    filteredYear = []
    releasedYear = Versions.filter(Versions => (Versions.Released.toString().includes(year)))
    console.log("Question 1: How many Versions released in the specified 'Year'?,  I/p: '1987' \n")

    console.log(`Ans: '${releasedYear.length}' Versions have been found in the year '${year}' \n`)

    for (p of releasedYear) {
        count = 0
        filteredYear.push(p.Name)
        count++
    }
    console.log('Filter by Year:', filteredYear)
    console.log("--------------------------------------------------------------------------------------------------------------------------------------- ")
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
// 2.Function for the "Architecture" which has been used for more versions

function findArch(archi) {
    filteredArchi = []
    architech = Versions.filter(Versions => (Versions.Architecture.includes(archi)))
    console.log("Question 2: Find the No. of Versions released based upon the specified 'Architecture',  I/p: 'IA-32' \n")

    console.log(`Ans: '${architech.length}' versions are designed using based upon '${archi}' Architecture \n`)
    for (i of architech) {
        count = 0
        filteredArchi.push(i.Name)
        count++
    }
    console.log('Filtered by Architecure:', filteredArchi)
    console.log("---------------------------------------------------------------------------------------------------------------------------------------- ")
}

// 3.Function for the versions which are based under the specified "TYPE"

function findByType(Type) {
    filteredType = []
    typ = Versions.filter(Versions => Versions.type.includes(Type))
    console.log("Question 3: Finding No. of Versions updated based on the specified 'type' \n")

    console.log(`Ans: '${typ.length}' versions have been released in the type '${Type}' \n`)
    for (i in typ) {
        count = 0
        filteredType.push(typ[i].Name)
        count++
    }
    console.log('FilteredbyType:', filteredType)
    console.log("--------------------------------------------------------------------------------------------------------------------------------------- ")
}

// 4.Function for the "Author" who contributed in more Versions 

function findAuthor() {
    array1 = []
    for (i of Versions) {
        count = 0
        array1.push(i.Author)
        count++
    }

    m = 1;
    const Authorobj = {}
    for (a of array1) {
        if (a in Authorobj) {
            Authorobj[a] += 1
        }
        else {
            Authorobj[a] = 1
        }
    }

    // Sorting the Object containing the Authors
    const sort_des = (Obj) => {
        arr4 = []
        des = {}
        for (m in Obj){
               arr4.push(Obj[m]) 
        }
        
        function srt1(a,b){
               return a-b
        }
        arr4.sort(srt1)
        arr4.reverse()
        
        for(n of arr4){
           for(o in Obj){
             if(n == Obj[o]){
                des[o] = Obj[o]
             }
           }
        }
        return des
    }

    sorted_AuthorObj = sort_des(Authorobj)
    console.log("Question 4: Which author has contributed in more Versions? \n")
    for (b in sorted_AuthorObj) {
        console.log(`Ans: '${b}' is the Author who has contibuted in more versions, contributing in '${sorted_AuthorObj[b]}' versions \n`)
        break;
    }

    VersionByMostAuthor = Versions.filter(n => n.Author.includes('Bill Gates'))

    filteredAuthor = []
    for(r of VersionByMostAuthor){
        filteredAuthor.push(r.Name)
    }
    console.log('Filtered by Author:',filteredAuthor)
    console.log("------------------------------------------------------------------------------------------------------------------------------------- ")
}


// 5.Function for Bug_Id

function findByBugid(id) {
    console.log("Question 5: Finding Name of the version by the given i/p 'Bug_ID' \n")
    // for(c in Versions){
        array2=[]
        // for(i of Versions){
        //     array2.push(i.Bug.Bug_ID)
        // }
        // console.log(array2)
    findbyID = Versions.filter(Obj => Obj.Bug.Bug_ID.includes(id))
    array3=[]
    for(c of findbyID){
        console.log(`Ans: '${id}' belongs to the version '${c.Name}' \n`)
    }  
    console.log("----------------------------------------------------------------------------------------------------------------------------- ") 
}

// --------------------------------------------------------------------------------------------------------------------------------------------------

findByYear('1987')
findArch('IA-32')
findByType('patch')
findAuthor()
findByBugid('23161224')