---
layout: post
title: 'Digital Forensics'
date: 2019-12-19
author: DoHerasYang
color: rgb(255,210,32)
cover: '/Pictures/forensics.jpg'
tags: Lectures

---

# Digital Forensics - Lecture

> The content of this blog is based on the course CM6016 (Cyber Threat Hunting and Digital Forensics (AUTUMN 2019~2020) at the University of Sheffield.
>
> **@All the konowledge rights are reserved by the owner of this course's materials and Nesrine Kaaniche at the University of Sheffield.**

> **Acknowledges Specially**:
>
> ​	I really appreciate my graduate classmates <u>Tanushree</u> and <u>Simon</u> for their careful and patient help to complete this seemingly impossible task. Without their help and advice I would not be able to complete such a large and complex task alone.
>
> ​	In the course of writing this blog, I wanted to quit many times because of the difficulty of digital forensic analysis. Thanks to <u>Neil</u> for encouraging me and accomplishing me.

---

Table of Contents

  \* [Digital Forensics - Lecture](#digital-forensics---lecture)

​     \* [1. Hacking Incident](#1-hacking-incident)

​     \* [2. FTK Imager](#2-ftk-imager)

​     \* [3. Drug Dealer Case](#3-drug-dealer-case)

​     \* [4. Credit Card Fraud](#4-credit-card-fraud)

​     \* [5.Linux Forensics](#5linux-forensics)

​     \* [6.Bad PDF](#6bad-pdf)

​     \* [7.Network Forensics](#7network-forensics)

​     \* [8. Mobile Forensics](#8-mobile-forensics)

​     \* [9. Icon Network](#9-icon-network)

---

### 1. Hacking Incident

**Chain of custody**: in legal contexts, is the chronological documentation or paper trail that records the sequence of custody of physical or electronic evidence. It is very essential to maintain the chain of custody to preserve the interity of the evidence and prevent it from the contamination.

The physical and electronic evidence may include:

+ Hard driver (Maybe in the computer or external driver) / portable storage driver / SD card
+ Devices( computer / laptop / mobile phone/ Tablet computer)
+ Floppy disk / Compact disc(CD) 
+ ID card / chest tag
+ The network-access items(Robot / wireless router )

---

### 2. FTK Imager

**Background:** 

> XYZ forensics is a data recovery and forensics company that offers data recovery, incident response, and forensic services to various financial institutions and Police forces in the UK. 
> One of their clients, Right Pharmaceuticals, has recently sent some evidence for an 
> Intellectual Property (IP) theft case that has been expedited to court within the week.
> The case is unique as it involves the CFO (one of the Co-Founders of the company) who is suspected to be involved in selling the company’s innovative drug formula for Diabetics to its competitors. However, Right Pharmaceuticals has just been acquired for £100 million by one of the top five pharmaceutical companies in the world. Right Pharmaceuticals was valued at £100 million primarily because of the Diabetics drug, which is proprietary to them.Knowing he is a few weeks from being rich, the Co-Founder suspected of this wrongdoing has submitted himself to the investigation by the acquiring company. Initial forensic analysis of the computer where the drug formula is stored has indicated that four USB drives were plugged into the computer by the CFO within the last two weeks. He has surrendered these USB drives to XYZ for analysis.
>
> > Your line manager has assigned this case to you and you are required to: 
> >
> > 1. Collect the evidence from the evidence lockup and maintain a chain of custody
> > 2. Create a disk image of the evidence while ensuring that the integrity of the evidence is not compromised in any way.
> > 3. Fill out the preliminary evidence examination report.

**Tools**:

`USB_Write_Blocker_All_Windows` is the software to prevent the writing the information to target portable device from the host machine. It's very easy to use, before you plug in the device.

+ You should open this batch file and follow the instruction from the console. 
+ Open registry editor and click run.
+ Connect the USB drive

`MD5` is the hash function which is widely use to produce a 128-bit hash value to verify the integrity of file. In digital forensics, it's very essential to keep the integrity and creditability of evidence.

`AccessData FTK Imager` is the software to preview and imaging tool used to acquire data (evidence) in a forensically sound manner by creating copies of data without making changes to the original evidence.

**Process and Analyse**:

1)Open the `AccessData FTK` and click `File -> Create Disk Image` and select `Physical Drive` which can allow you to recover more information than the other options such as the hidden information.

![01](/Pictures/Digital Forensics/FTK/01.png)

2)Select the targeted device and click `Finish` , we will obtain the new windows. And click the `Add` in the image destination.

![02](/Pictures/Digital Forensics/FTK/02.png)

3)After that we can obtain a new windows which want us to select the type of image destination. `Raw(dd)` is the exact copy of disk, `SMART` is the uncommon option, `E01` is the expert witness formate and has the all raw data from the suspect system and checksum of raw data and encrytion or something like this, `AFF` maybe will not supported anymore. So we select the `Raw`and click `next`.

![03](/Pictures/Digital Forensics/FTK/03.png)

4)The next windows shows the details of the copy, just fix them by yourself or requirements in the exam.

![04](/Pictures/Digital Forensics/FTK/04.png)

5)Next, we will be asked to select the `Image Destination Folder`, and `Image Fragment size` allows us to split up the large file into different size data and store them on the other store media. If you want to encrypt the raw data, just tick `Use AD Encryption`. After we have decided the previous information, we can click the `Finish`.

![05](/Pictures/Digital Forensics/FTK/05.png) 

6) We just wait the software to create image, after that we will finish our task.

![06](/Pictures/Digital Forensics/FTK/06.png)

7)After the backup creation process it will show a window with Drive/Image Verify results note down the Hash values for SHA1 and MD5 in the preliminary examination report.

---

### 3. Drug Dealer Case

**Background**:

> **Drug Dealer Case:**
>
> Based on the following case-study, you need to compile a FULL forensics report that answers following questions (please note that you can only use any Hex editor program for this investigation):
>
> 1. Who is Joe Jacob's supplier of marijuana and what is the address listed for the supplier?
> 2. What crucial data is available within the coverpage.jpg file and why is this data crucial?
> 3. What (if any) other high schools besides Smith Hill does Joe Jacobs frequent?
> 4. For each file, what processes were taken by the suspect to mask them from others?
> 5. What processes did you (the investigator) use to successfully examine the entire contents of each file?
> 6. What program was used to create the Cover Page file. What is your proof (Proof is the key to getting this question right, not just making a guess).
>
> Joe Jacobs, 28, was arrested yesterday on charges of selling illegal drugs to high school students. A local police officer posed as a high school student was approached by Jacobs in the parking lot of Smith Hill High School. Jacobs asked the undercover cop if he would like to buy some marijuana. Before the undercover cop could answer, Jacobs pulled some out of his pocket and showed it to the officer. Jacobs said to the officer "Look at this stuff, Colombians couldn't grow it better! My supplier not only sells it direct to me, he grows it himself." 
>
> Jacobs has been seen on numerous occasions hanging out at various local high school parking lots around 2:30pm, the time school usually ends for the day. School officials from multiple high schools have called the police regarding Jacobs' presence at their school and noted an increase in drug use among students, since his arrival.
>
> The police need your help. They want to try and determine if Joe Jacobs has been selling drugs to students at other schools besides Smith Hill. The problem is no students will come forward and help the police. Based on Joe's comment regarding the Colombians, the police are interested in finding Joe Jacob's supplier/producer of marijuana. 
>
> Jacobs has denied selling drugs at any other school besides Smith Hill and refuses to provide the police with the name of his drug supplier/producer. Jacobs also refuses to validate the statement that he made to the undercover officer right before his arrest. Upon issuing a search warrant and searching of the suspect's house the police were able to obtain a small amount of marijuana. The police also seized a single floppy disk, but no computer and/or other media was present in the house. 
>
> The police have imaged the suspect's floppy disk and have provided you with a copy. They would like you to examine the floppy disk and provide answers to the previous questions. The police would like you to pay special attention to any information that might prove that Joe Jacobs was in fact selling drugs at other high schools besides Smith Hill. They would also like you to try and determine if possible who Joe Jacob's supplier is. Jacob's posted bail set at $10,000.00. Afraid he may skip town, the police would like to get him locked up as soon as possible. To do so, the police have asked that you have the results fully completed and submitted by October 25, 2002. Please provide the police with a strong case consisting of your specific findings related to the questions, where the findings are located on the disk, processes and techniques used, and any actions that the suspect may have taken to intentionally delete, hide and/or alter data on the floppy disk.

**Tools**:

`HxD` is the software which is used to edit binary files and find the binary information and rebuild the file from the Hex file. It can open the raw image file to change the content of file,modify main memory (RAM) and handle size of any file. For more information, please click [here](https://mh-nexus.de/en/hxd/).

**Process and Analyse**:

1.Open the `HxD` software, click `File`, then click `Open` and select the image file you want to analyse.

![01](/Pictures/Digital Forensics/Drug Dealer Case/01.png)

2.It is very convenient to use the `Find` tool which has been embedded in the software to find the file signature (Hex Value) and recover the file from the Hex value. Follow below instruction. <br>`Search` → `Find`

![02](/Pictures/Digital Forensics/Drug Dealer Case/02.png)

For `Search for` blank you should input the value of file signature, I will introduce them in next steps. Besides, you can find the usable text information by selecting the `Text-string` and input the key words.

3.For the **first question**, we tend to find the relevant file which can record the clues for question. I guess this file's type is `doc` or `docx`. For the file type like `DOC DOT PPS PPT XLA XLS WIZ` the Hex signature is `D0 CF 11 E0 A1 B1 IA EI`, and we input `D0 CF` into the blank of `Search for` and click `OK`, you will be directed into the beginning of the targeted file(`00004200`).

![03](/Pictures/Digital Forensics/Drug Dealer Case/03.png)

Next,  we should find the end Hex value and location of this file, the clue we can guess is that content should occur the information for `Microsoft Document type` and we select the location where the zero is end(000091F0).<br>And we should select all the Hex value between the beginning and end. We have the easy way yo select this target block,  right-click the Hex value and click `Select block` and input the corresponding offset and you will obtain all the Hex value. After that, copy these Hex value and create a new blank file and paste copied value into that new file.

![04](/Pictures/Digital Forensics/Drug Dealer Case/04.jpg)

Then save the new create Hex file by `ctrl+S` and choose the file type as `doc`. You will get the result. It seems like a email or letter.

![05](/Pictures/Digital Forensics/Drug Dealer Case/05.png)

4.For the **second question**, if we want to locate and recover the `JPG` file we should find the Hex signature of `JPG` file which is `FF D8` which at `000092000`. We can locate the beginning of jpg file and also it is very easy to find the end of Hex value.<br>By finishing the searching for Hex signature, you can find the beginning location should be `00009200`. The trailing signature of the .jpg file is `FF D9` which comes at `0000B430` so we will select the data till this address. By scrolling down the Hex file, we can find `pw = goodtimes` which is located at the line of `0000CF20`. 

Then, we save the Hex value file as the `JPG` file.

![06](/Pictures/Digital Forensics/Drug Dealer Case/06.jpg)

5.We have recognized that `50 4B` is the Hex value of `XLSX` or `ZIP`file. However the `XLSX`'s Hex value should be more specific which is `50 4B 03 04 14 00 06 00`. We can see the original Hex value is different from that. So we can make sure that We can easily extract the final file by imitating previous steps.<br>`0000D000` is the beginning Hex value of the `ZIP` file and also we can locate the end Hex value of file by considering the trailer bytes `50 4B` after which we have to count `17 characters` which here is at `0000D9FF`. We will obtain the encrypted `XLS` file. And the password we have known is `goodtimes`.

![07](/Pictures/Digital Forensics/Drug Dealer Case/07.png)\

Refer the following [link]( https://www.garykessler.net/library/file_sigs.html) to get the signatures for different file formats. 

6.**Q4**,he used passwords or encryption to mask them from others.

7.**Q5**, we used hex editor and file signature table to successfully examine the contents of each file.

8.**Q6**, The `JPG` file just includes the values for color space, I don't know how to confirm the tools to generate it.



---

### 4. Credit Card Fraud

**Background**:

>Frank works for a fintech company based in London. He has a laptop he uses when he
>works from home which automatically connects to the company network via a VPN.
>
>He has recently submitted his resignation to leave in the next month. However, within the
>last 2 weeks, the Security Operation Centre (SOC team) had noticed unusual traffic from
>Frank’s laptop around 11.30pm and 2am every day.
>
>He is suspected to be stealing creditcard details of customers of the compay. In order to
>avoid all evidence being erased, the SOC team instructed the IT team to tactically offer Frank a new laptopso that the laptop could be imaged and potential evidence analysed.
>
>The IT team was able to disable his access to the VPN and as such when Frank got into
>work on Thursday, he reported that he was unable to access the network. IT offered him a
>new laptop and directed that his old laptop will be looked at wuthin the next few days. By
>doing this, Frank could not delete or tamper with any evidence on the device.
>
>The Security Team Leader has now created a disk image of Frank's laptop which has been assigned to you to analyse. Using `Autopsy` to analyse the evidence.
>

**Tools**:

`Autopsy` : Autopsy is a computer software to make easier for investigators to flag pertinent sections of data. It can support major file systems (NTFS, FAT, ExFAT, HFS+, Ext2/Ext3/Ext4, YAFFS2) by hashing all files, unpacking standard archives (ZIP, JAR etc.), extracting any EXIF values and putting keywords in an index. Some file types like standard email formats or contact files are also parsed and cataloged. For more information, please click [here](http://www.sleuthkit.org/autopsy/).

**Process**:

1.Open the `Autopsy` software, click the `File` → `New case`→ Input `Case Number` → Finish the `Optional Information` → `Finish`

![01](/Pictures/Digital Forensics/Credit Card Fraud/01.png)

2.Click `Add Data Source` → Choose `Disk Image or VM File` → Click `Next`.

![02](/Pictures/Digital Forensics/Credit Card Fraud/02.png)

3.Browse the image path → Click `Open` → Click `Next` → Click `Next`, you will get the loading interface. You have to wait for the programme which is analysing all the system files.

![03](/Pictures/Digital Forensics/Credit Card Fraud/03.jpg)

**Analysis**:

**1.What is the name of the company where Frank works?**

The thoughts to solve this question is to discover the useful files which could contain the company information. So maybe the email could include the inforamtion like the email signature. Furhetmore, the documents may also include the company information, the `Autospy` have given you the results about all the files which is orderd by `File Types` beneth the `view` directory. You can find a file named `letter head.doc` which you can make sure that the name of company is BoxiPay.

![04](/Pictures/Digital Forensics/Credit Card Fraud/04.png)

We may also check his emails which are sent from where we can get the position of Frank with the company name.

The company logo is available in inbox emails which can be found under `vol2\Users\IEUser\AppData\Roaming\Thunderbird\Profiles\nujdgn3y.default\ImapMail\mail.boxipay.online`.

**2.Where is the location and name of the file where Frank stores his password?**

We just follow our normal mind, we may not sotre our password in plaintext, so we tend to find something which can hide the text information. The `media files`, such as `pictures`, `music` and  `vedios`, should come to our mind at first. Meanwhile, we can check whether there is any documents file which provide hint for the location of passwrod. After we check all the document file, we tend to search the result folder which has collected all the media files. Unfortunately, It seems that Frank is clever than we think. 

The file structure in Windows has one prominent features that each users has their unique forlder in `C:\users`. For the image of Windows system, it keeps this feature and the path should be `vol2\users`. We head down to this repositority and check all the folders such as `Document` and `Music`.  After the carefully searching, we can find our answer is under the directory named `Personal Biz`.

![05](/Pictures/Digital Forensics/Credit Card Fraud/05.png)

**3.Which operating system and version was Frank's laptop running?**

As the Microsoft technical standard, for the older operating system like `Windows NT/2000/XP/2k`, the system information is stored in the file named `boot.ini` which can provide the operating system installed on a particular system partition. This file could show various boot options that are available to user, including the multiple operating systems on the different partitions. The forensics can check the Windows setup logs (eg. `C:\windows\setuplog.txt` `C:\windows\debug\netsetup.log`) which includes can provide useful information.

Considering the newest operating system like `Windows 7/8/10` , the forensics can use the register subkey to find the useful information from the `Registry`. Just query the `SOFTWARE\Microsoft\Windows NT\Current Version` by a standard registry editor such as `regedit`. But it's very difficult to find the exact information about the system from a image without running it.

So I tried to open the Registry to find the information of my host machine's operating system version as shown in below pictures. Although it costs so much time to find the information in a system image, you can still search for the subkey's name to find the cached value which could be hiden in somewhere from the target image file.

![06](/Pictures/Digital Forensics/Credit Card Fraud/06.png)

After I find the name of the operating system value in registry, so try to search the name `ProductName` in Autopsy and we would obtain the answer.

![07](/Pictures/Digital Forensics/Credit Card Fraud/07.png)

**4.At which location did Lewis ask to meet Frank?**

If you have any information to search, you just need to input the information in `Keyword Search` in Autopsy. You will obtain the answer directly.

Also, the folders with name audio, image, message in file types are very important. 

For password messages we can check these folders. For this answer if we go to `vol2/File Types/By MIME Type/message/rfc822.` The text mail `mail-20181030` says everything.

![08](/Pictures/Digital Forensics/Credit Card Fraud/08.png)

**5.Who are the top 3 customers Frank sold the most cards to in Decemeber 2017 and how many cards did he sell to them?**

It is very easy to find the relevant files named `2017 December Sales.xls` by following the `Views` subbar and proceeding to the correlative file collection.

As there should be some file to save these details so go to application and search for all file types on the V`iews/File Types/application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`, you will get a excel file named 2017 December. Extract this file and sort the data in excel.

![09](/Pictures/Digital Forensics/Credit Card Fraud/09.png)

**6.What is the password for smokingGun.zip?**

We have gained the clue for the `smokingGun.zip`'s password which is `MYFOOTBALL TEAM AV`. 

So we try to find one audio file which contains the password for `smokingGun.zip`.We can finally find that the target audio file named `creative.mp3` contains the password.

Also, the folders with name audio, image, message in file types are very important. For password messages we can check these folders. For this answer if we go to `vol2/File Types/By MIME Type/audio/mpeg/creative.mp3`.

**7.What websites has Frank Visited using the laptop?**

You can easily find the website history and cookies from the `Results` subbar. And also use the `Timeline` to sort out all the web activity. Click on the web history and on the right side Save table as CSV. 

![11](/Pictures/Digital Forensics/Credit Card Fraud/11.png)



![12](/Pictures/Digital Forensics/Credit Card Fraud/12.png)



---

### 5.Linux Forensics

**Background**:

>Ali the network administrator of company “AliBest” recently witnessed strange activities in one of his Linux machines! He is quite panicked since that machine plays a vital role in his network and he has heard lots of hacking bad-news happened for other companies recently. Therefore, he decided to contact you as a forensics investigator to resolve the issue.
>
>You have guided him to take an image of the hard disk, and system memory snapshots and post them to you. You need to do a complete forensics investigation and compile a full-forensics report. Your report should address all the following questions:

**Tools:**

+ `Autopsy`

- The image we use for this Lecture is `2 Disc Image File`.

**Analysis:**

**1.What service and what account triggered the alert for network administrator?**

Firstly, I think we should have some knowledge of Linux system logs and file structure which can help us better to search for useful information which we can base on to analyse what happened in target machine.    If your system or server has been suffered from the cyber attack, go check the system log and you will find some clues.

>  The system log is managed by a service called `syslog`:<br>`/var/log/boot.log` : Records the events that occur during the boot process of the system, which is the information displayed during the POST process of the Linux system.<br>`/var/log/lastlog`  ：Record the time of the last successful user login, login IP and other information.<br>`/var/log/secure`    ：Linux system security log, recording user and workgroup deterioration, user login authentication.<br>`/var/log/btmp`        ：Record users, time and remote IP address of Linux login failure.<br>

> **/bin**: contains all the binaries for the OS<br>
> **/sbin**: System binaries<br>
> **/boot**: all the stuff needed for booting the system<br>
> **/cdrom**: for mounting CDs<br>
> **/dev**: All the mounted devices come under this like hard disk partitions which are called sda1,sda2 etc<br>
> **/etc**: It is a folder which contains all system-vide application files which are system specific not the user specific like apt.<br>
> **/lib/lib32/lib64**: are folders where libraries are saved for system required software.<br>
> **/media/mnt**: both are more or less same if you mount a device or connect a pen drive on a computer with linux OS the system automatically mounts the device in the media folder while if you manually mount a device it is done using mnt.<br>
> **/opt**: It is the folder which contains all optional files like optional applications or software which you want to use. Manually installed software by vendors reside here. Self written application resides here.<br>
> **/proc**: It contains all the processes running on the system. Pseudo files. Use process ID PID to check all the processes with this ID. All cpu info of CPU can be find out.<br>
> **/root**: User home folder but root permission is required.<br>
> **/run**: It contains all the processes running on RAM so as and when the system shuts down the data stored here goes which means this folder is empty when we turn ON the system.<br>
> **/sys**: system files, similar to run directory so on boot time nothing is stored there.<br>
> **/tmp**: temporary folder so if something crashes in between while running any application you can get the recent copy of your work here. Mostly empty when you reboot the system.<br>
> **/usr**: All the applications used by user will be installed here while bin folder contains all the application used by the system to do maintenance. Non essential applications are stored here. So the bin, sbin and lib inside the usr folder contain their essential files and libraries.<br>
> **/var**: it contains all the logs and crashes for system and many aplications. It is always expected to grow whenever you run the system.<br>
> **/home**: User specific information just like My Documents in windows.<br>
>
> For more information, please click [here](https://doherasyang.github.io/2019/12/19/Digital-Forensics.html)https://www.youtube.com/watch?v=HbgzrKJvDRw 

For some commericial operating system like `Debian` and `Ubuntu`, they use `/var/log/auth.log` to store the stores logs from the pluggable authentication module (PAM), including successful logins, failed login attempts, and authentication methods. 

For the details of system admin, the information is stored in `/etc/passwd` and `/etc/shadow`. Also you could obtain the hostname from `/etc/hostname`. For the `/etc/passwd` file formate, we can see that `/etc/passwd` contains one entry per line for each user (user account) of the system. All fields are separated by a colon `(:)` symbol. Total of seven fields as follows. The formate is the `Username:Password:User ID(UID):Group ID(GID):User ID Info:Home Directory:Command/Shell`.  From the below pictures, we can see that only one user named `root` is the system admin.

![01](/Pictures/Digital Forensics/Linux Forensics/01.png)

Next we go to check the system log file, we can see that the remote attacker wanted to create a new users in  attacked system via `ssh`. In addition, the port name `22` is reserved for the `ssh` service. On this protocol the `SSHD` service has been attacked by the attacker through which he is trying to login into the system.

The account name is Victoria `./var/etc/hostname`

> **SSH:** This is the home page for the SSH (Secure Shell) protocol, software, and related information. SSH is a software package that enables secure system administration and file transfers over insecure networks. It is used in nearly every data center, in every larger enterprise. 
>
> **SSHD** is the [**OpenSSH**](https://www.ssh.com/ssh/openssh/) server process. It listens to incoming connections using the [**SSH protocol**](https://www.ssh.com/ssh/protocol) and acts as the server for the protocol. It handles user authentication, encryption, terminal connections, file transfers, and [**tunneling**](https://www.ssh.com/ssh/tunneling/).

![02](/Pictures/Digital Forensics/Linux Forensics/02.png)

**2.What kind of system runs on targeted server? (OS, CPU, etc)**

It is very easy to use the Unix commands to operate the Linux system as you want. 

We can obtain the system information by checking this file `/etc/issue`. For the information about the CPU, you can access the `/proc/cpuinfo` to obtain it. Also, you can find them from the log file at `/var/log/installer/hardware-summary`.

![03](/Pictures/Digital Forensics/Linux Forensics/03.png)

**3.What processes were running on targeted server?**

There is no log that logs the processes. The only way you would find is that perhaps there was something has written to the `syslog` . So the alternative way is to find the relevant log file which may have the crucial informartion about the process. We can try these log files `/var/logs/syslog` and  `/var/logs/messag`.

Otherwise, the processes running on the system may be obtained from the `/var/run` crond.pid, sshd.pid, acpid.pid, dhcpclient.eth0.pid, rsyslogd.pid, postmap.pid, rpc.statd.pid, sm-notify.pid, SMTP.

> The software utility **cron** is a time-based [job scheduler](https://en.wikipedia.org/wiki/Job_scheduler) in [Unix-like](https://en.wikipedia.org/wiki/Unix-like) computer [operating systems](https://en.wikipedia.org/wiki/Operating_system). Users that set up and maintain software environments use cron to schedule jobs (commands or [shell scripts](https://en.wikipedia.org/wiki/Shell_script)) to run periodically at fixed times, dates, or intervals. It typically automates system maintenance or administration—though its general-purpose nature makes it useful for things like downloading files from the [Internet](https://en.wikipedia.org/wiki/Internet) and downloading [email](https://en.wikipedia.org/wiki/Email) at regular intervals.
>
> The acpid service supports the Advanced Configuration and Power Interface (ACPI) to allow intelligent power management on your system and to query battery and configuration status. It listens on a file (**/proc/acpi/event**) and when an event occurs, executes programs to handle the event. Rules are defined by simple configuration files. acpid will look in a configuration directory (**/etc/acpi/events** by default), and parse all files that do not begin with a period (‘.’). Each file must define two things: an event and also a corresponding action.
>
> **Rsyslogd** is a system utility providing support for message logging.
>
> The **postmap** command creates or queries one or more Postfix lookup tables, or updates an existing one.
>
> `rpc.statd` implements the NSM (Network Status Monitor) RPC protocol, As per the name NSM, it doesn’t actually provide active monitoring but implements a reboot notification service. It is used by rpc.lockd for lock recovery if NFS Server or Client Crashes.
>
> **NFS** must be able to detect if any lock state is lost coz of system reboot. NFS Server must release all file locks used by any application on client which got rebooted, Similarly a client must remind the server of file locks held by applications running on it.
>
> **NSM** is used to notify NFS peers of reboots and for this it requires 2 components.
>
> **rpc.statd** which listens & sends reboot notifications
>
> **sm-notify** A helper program that notifies NFS peers after the local system reboots.

**4.What are attackers IP and target IP addresses?**

For the attacker IP address, we can deduce it from the `/var/log /auth.log`, and should be `192.168.56.101`.

For the target IP address, You can find this crucial information from `/etc/var/log/exim4/rejectlog` where the host IP should be `192.168.56.1`.

![04](/Pictures/Digital Forensics/Linux Forensics/04.png)

**5.What service was attacked?**

We can see that before the attacker tried to download the files to host machine, the system tried to establish the `SMTP` service. `SMTP` is a set of rules that allow data to be sent from one email server to another and allows the exchange of online messages. For the more details about the `SMTP` services, please click [here](https://whatis.techtarget.com/definition/SMTP-Simple-Mail-Transfer-Protocol).

![05](/Pictures/Digital Forensics/Linux Forensics/05.png)

**6.What attacks were launched against targeted server?**

From the `mainlog` and `rejectlog` , we can see that there are plenty of rejection messages which indicate that "message is too big". So attacker carried out the buffer overflow to attack the target server.

![06](/Pictures/Digital Forensics/Linux Forensics/06.png)

**7.What flaws or vulnerabilities did the attacker exploit?**

The attacker exploited the vulnerabilities in `Sendmail` which is widely used  `Mail Transfer Agent (MTA) `for `Unix` and `Microsoft Windows system`.

A remotely exploitable vulnerability has been discovered in Sendmail. The vulnerability is due to a buffer overflow condition in the SMTP header parsing component. Remote attackers may exploit this vulnerability by connecting to target SMTP servers and transmitting to them malformed SMTP data.

The overflow condition occurs when Sendmail processes incoming e-mail messages containing malformed address parameters in a field such as "From:" or "CC:". One of the checks to ensure that the addresses are valid is flawed, resulting in a buffer overflow condition. Successful attackers may exploit this vulnerability to gain root privileges on affected servers remotely.

By exploiting the above vulnerability in SMTP user is trying to launch buffer overflow attack and he wants to create a new user in the server.(/var/log/rejectlog create user passwd and wget commands)

**8.Did the attacker download files? Which ones? Give an analysis of those files.**

We can analyse the `/etc/log/mainlog` to find the message about the files which were downloaded by remote attacker. `wget` is one of the Linux commands which can allow the other to download files from the Internet or remote server. It can support  HTTP, HTTPS and FTP protocols, and can use HTTP proxy. For more details, please click [here](https://shapeshed.com/unix-wget/).

After you extract the `mainlog/rejectlog` from the `Autopsy`, you can open it by `Notepad` and analyse it. You can find the `wget` command , target file names and target storing location.

`/tmp/c.pl` and `/tmp/rk.tar`. 

Initially he is downloading the files but in the end para he is using rm command to remove the rk.tar file.

![05](/Pictures/Digital Forensics/Linux Forensics/07.png)

**9.Do you think these attacks were automated? Why?**

No, the attacker manullly steal the files via the SMTP server. We can see the time gap between each attacks is larger than two minutes.

![08](/Pictures/Digital Forensics/Linux Forensics/08.png)

**10.What could have prevented the attacks?**

The system admin should update the `SMTP` and its components into the latest version(EXIM 4.0 version has this vulnerability so updating it could have prevent the attack). Also for the internal network or secret network, the internal network should be directly disconnected from the external network or a firewall should be set up between the local network and the external network. 

The firewall can prevent most of cyber attack.

**11.What network connections were opened and in which state?**

From the previous questions and its answer, we can find the ports for connection such as `ssh` , `SMTP` are open. 

From the log file `/etc/var/log/daemonlog`, we can find the connections like `DHCP` is open. From the `/etc/var/log/dmesg.0`, we can see that the `TCP` and `IP` connection is open.

![09](/Pictures/Digital Forensics/Linux Forensics/09.png)



---

### 6.Bad PDF

**Background**:

> Ali is a famous banking system forensics investigator with lots of successful financial case investigation! Ali is recently contacted by a financial company called "Best Finance (BF)" to perform forensics work on a recent incident that occurred. One of BF employees had received an email from a fellow co-worker that pointed to a PDF file. Upon opening the file, the employee did not seem to notice anything, however recently they have had unusual activity in their bank account. BF was able to obtain a memory image of the employee’s virtual machine upon suspected infection. BF Asked Ali to analyze the virtual memory and report on any suspected activities found. Since Ali is very busy these days he has asked you to complete this investigation.

**Tools**:

In this section, we use the  well-known open source  forensics framework `volatility` which can be used for `Memory Forensics and Analysis`. It can analyse the raw dumps, crash dumps, VMware dumps (vmem), virtual box dumps, and many others. For the installation information about the `volatility`, you can check [here](https://github.com/volatilityfoundation/volatility). For the information about how to use this tools and downloading the Memory Forensics Cheat Sheet, please click [here](https://digital-forensics.sans.org/media/volatility-memory-forensics-cheat-sheet.pdf).

[Volatility - The Volatility Foundation](https://downloads.volatilityfoundation.org/releases/2.4/CheatSheet_v2.4.pdf)

**Process**:

Open the `Command Prompt` as the administraor, and proceed to the installation folder `C:\volatility-2.6\volatility-master`.

```shell
> cd C:\volatility-2.6\volatility-master
> chdir 
C:\volatility-2.6\volatility-master
# You can check the usable plugin of volatity 
> python vol.py -h
Supported Plugin Commands:
atoms           Print session and window station atom tables
atomscan        Pool scanner for atom tables
bigpools        Dump the big page pools using BigPagePoolScanner
bioskbd         Reads the keyboard buffer from Real Mode memory
callbacks       Print system-wide notification routines
clipboard       Extract the contents of the windows clipboard
cmdline         Display process command-line arguments
cmdscan         Extract command history by scanning for _COMMAND_HISTORY
connections     Print list of open connections [Windows XP and 2003 Only]
connscan        Pool scanner for tcp connections
consoles        Extract command history by scanning for _CONSOLE_INFORMATION
crashinfo       Dump crash-dump information
deskscan        Poolscaner for tagDESKTOP (desktops)
devicetree      Show device tree
dlldump         Dump DLLs from a process address space
dlllist         Print list of loaded dlls for each process
driverirp       Driver IRP hook detection
drivermodule    Associate driver objects to kernel modules
driverscan      Pool scanner for driver objects
dumpcerts       Dump RSA private and public SSL keys
dumpfiles       Extract memory mapped and cached files
editbox         Displays information about Edit controls. (Listbox experimental.)
eventhooks      Print details on windows event hooks
filescan        Pool scanner for file objects
gahti           Dump the USER handle type information
...
```

**Analysis**:

**1.List the processes that were running on the victim’s machine. Which process was most likely responsible for the initial exploit?** 

You can check the state of the target memory by the following command, and you will obtain the useful information. We can find that the process `firefox.exe` runs one child process named `AcroRd32.exe` whose pid is `1752`.

```powershell
> python vol.py pstree -f "C:\Users\ForensicsUser\Desktop\Forensics 2019\Tasks\8 - Bad PDF\BF.vmem"
```

![01](/Pictures/Digital Forensics/Bad PDF/01.png)

**2.List the sockets that were open on the victim’s machine during infection. Are there any suspicious processes that have sockets open?**

Use the command `sockscan` for checking the information about the processes which use the sockets. From the picture, we can see that the pid `1752` which is `AcroRd32.exe` and pid `888` which is `firefox.exe`.

```shell
> python vol.py sockscan -f "C:\Users\ForensicsUser\Desktop\Forensics 2019\Tasks\8 - Bad PDF\BF.vmem"
```

![02](/Pictures/Digital Forensics/Bad PDF/02.png)

```shell
# For all TCP
> python vol.py connections -f "C:\Users\ForensicsUser\Desktop\Forensics 2019\Tasks\8 - Bad PDF\BF.vmem"
# For All Open sockets
> python vol.py sockets -f "C:\Users\ForensicsUser\Desktop\Forensics 2019\Tasks\8 - Bad PDF\BF.vmem"
```

**3.List any suspicious URLs that may be in the suspected process’s memory.**

To check the suspicious URLs, you should use the `image-loc` command to generate the web history from the memory files. From the above URLs it can be seen that the third one which is related to the `process ID 1756` is the most suspected one.

```shell
> python vol.py -f "C:\Users\ForensicsUser\Desktop\Forensics 2019\Tasks\8 - Bad PDF\BF.vmem" image-loc iehistory
```

![03](/Pictures/Digital Forensics/Bad PDF/03.png)

```shell
> strings "C:\Users\ForensicsUser\Desktop\Forensics 2019\Tasks\8 - Bad PDF\BF.vmem" | findstr "http://" > "./result/urlresult.txt" | findstr "https://" > "./result/urlresult.txt"
```

**4.Are there any processes that contain URLs that may point to banking troubles? If so, what are these processes and what are the URLs?**

Use command `strings “C:\Users\Forensics User\Desktop\Forensics 2019\Tasks\8-Bad PDF\BF.vmem” > “C:\Users\Forensics User\Desktop\Forensics 2019\Tasks\8-Bad PDF\results.txt”`

Search for the string `bank` in the text file. As it is related to the `firefox` so the process ID will be same as the ID of firefox i.e. `888`.

We have locked the target is the web application whose name is `firefox` and also the service named `AcroRd32.exe` which is supported by the Adobe. Let's go check the `dumpfiles` and `memdump`. You should download the `Strings` command line from [here](https://docs.microsoft.com/en-us/sysinternals/downloads/strings). And copy all the files into the repostity named `result`.

```shell
> python vol.py memdump -f "C:\Users\ForensicsUser\Desktop\Forensics 2019\Tasks\8 - Bad PDF\BF.vmem" -p 888 --dump-dir ./result
> python vol.py memdump -f "C:\Users\ForensicsUser\Desktop\Forensics 2019\Tasks\8 - Bad PDF\BF.vmem" -p 1752 --dump-dir ./result
> cd result | dir | chdir
888.dmp
1752.dmp
strings.exe
strings64.exe
C:\volatility-2.6\volatility-master\result
> strings 888.dmp > 888.txt | strings 1752.dmp > 1752.txt
> dir
888.dmp
1752.dmp
888.txt
1752.txt
strings.exe
strings64.exe
```

From the generated file named `888.txt` and `1752.txt` , we can find the URL like `search-network-plus.com` and `https://onlineeast#.bankofamerica.com/`. 

**5.List suspicious files that were loaded by any processes on the victim’s machine. From this information, what was a possible payload of the initial exploit be that would be affecting the victim’s bank account?**

Use the command for memory dump

```shell
> Python vol.py –f “C:\Users\Forensics User\Desktop\Forensics 2019\Tasks\8-Bad PDF\BF.vmem” memdump –p 1752 –dump-dir ./result
```

Seach for `.exe` files

Sspicious file `srda64.exe` because this file has been downloaded with the adobe patch which is not there in the authenticated update patch. 

For the files in the system memory, we should use the command named `filescan` to find the FILE_OBJECT handles. We should compare the content betwenn the `file.txt` and `888.txt` to find which files were loaded by the process. We can try to find the virus file which can steal the confidential information.

```shell
> python vol.py filescan -f "C:\Users\ForensicsUser\Desktop\Forensics 2019\Tasks\8 - Bad PDF\BF.vmem" > ./result/file.txt
> python vol.py malfind -f "C:\Users\ForensicsUser\Desktop\Forensics 2019\Tasks\8 - Bad PDF\BF.vmem" -p 1752 --dump-dir ./result
```

![04](/Pictures/Digital Forensics/Bad PDF/04.png)

![05](/Pictures/Digital Forensics/Bad PDF/05.png)

From the previous steps, we can find the suspicious files named `sdra64.exe` which had been operated by the targeted application, Next we have to check the details of this file. The picture below shows that there are two files named `sdra64.exe`. 

Next, we should check the `dumpfiles` to check the possibality of virus files. The first file's offset is `0x000000000230ff28`, and the second file's offset is `0x0000000002464028`, you can check the dump files which may contain the crucial information.

By running the following command we will get the malware in the dump file but possibly it will not open because of virus protection in our PCs. This is the initial exploit or possible payload.

```shell
>python vol.py dumpfiles -f "C:\Users\ForensicsUser\Desktop\Forensics 2019\Tasks\8 - Bad PDF\BF.vmem" -Q 0x000000000230ff28 --dump-dir ./result
>python vol.py dumpfiles -f "C:\Users\ForensicsUser\Desktop\Forensics 2019\Tasks\8 - Bad PDF\BF.vmem" -Q 0x0000000002464028 --dump-dir ./result
> cd result | strings file.None.0x82091008.dat > PDF_1.txt | strings file.None.0x8221fb08.dat > PDF_2.txt
# for PDF.php
> python vol.py dumpfiles -f "C:\Users\ForensicsUser\Desktop\Forensics 2019\Tasks\8 - Bad PDF\BF.vmem" -Q 0x0000000001ffadf0 --dump-dir ./result
```

We can find this virus file which can steal the information from the host computer and can be embedd in the email, for more details, please click [here](https://www.file.net/process/sdra64.exe.html).

**6.Are there any related registry entries associated with the payload?** 

We can use the command `printkey` to generate all the registry information.

```shell
> python vol.py -f "C:\Users\ForensicsUser\Desktop\Forensics 2019\Tasks\8 - Bad PDF\BF.vmem" printkey -K "“ Microsoft\Windows\CurrentVersion\Run" --profile = WinXPSP2x86 > ./result/rekey.txt
```

With the professor's help, we should check the logging information which located. at `Microsoft\WindowsNT\Currentversion\Winlogon` . And the vaule should be the current value of the virus file.

**7.What technique was used in the initial exploit to inject code in to the other processes?** 

The Trojan virus file named `sdra64.exe`, this is the backdoor programme which the hacker use to steal the information. For more information, please click [here](https://www.virustotal.com/gui/file/e68610cb55747763d40537c0ebd1bf20844413d6285f5661414e409e7e3cfab7/detection).

---

### 7.Network Forensics

**Bacnground:**

> Ali the network administrator of “Best Bankers” bank recently witnessed strange activities in several machines of his network! He is quite panicked since the network is used for lots of online transactions everyday and the last thing that he wants to have hackers around! Therefore, he decided to contact you as a forensics investigator to help him in investigating the issue. Unfortunately, you were not able to personally attend to the bank and therefore advised Mr. Ali to sniff all network traffic, collect them as a PCAP file and send to you. Please refer to the provided PCAP file and do a complete forensics investigation.

**Tools**:

`Wireshark`: **Wireshark** is a must-have (and free) network protocol analyzer for any security professional or systems administrator. It's like Jaws, only for packets. ... This free software lets you analyze network traffic in real time, and is often the best tool for troubleshooting issues on your network. For more details, please click 

**Analysis**:

**1.List the protocols found in the capture. What protocol do you think the attack(s) is/are based on?**

Go to `Statistics -> Protocol Hierachy`

From the `Protocol hierachy` it can be seen that the `HTTP` takes most of the percent bytes `78.8%` out of which a big text packet `Line Based Text Data` is taking `64.1%` of total consumption which is doubtful so we can check it in the `pcap.log`

![01](/Pictures/Digital Forensics/Network/01.png)

Next, we input the `HTTP` into the filter to check all the `HTTP` packets. As we can see that Line Based Text data is taking maximum payload so we will search for this in all `html` pages. In info look for all packets which have `text/html`.

Start with the first packet, Go to middle window in which the Response in frame XX is written. So go with this flow and check for something unusual. From here, we come to know that the local machine was trying to connect to `192.1689.56.50`.

Also from the first packet we can observe that the local host (`10.0.2.15`) is trying to connect to (192.168.56.50) (see upper window `packet 25`) the URL of which is http://rapidshare.com.eyu32.ru/login.php (This info is available in the middle window HTTP). The response is in `packet 28` where the user is asked to enter the log information which can be viewed in the middle window `Line Based Text data`. So the user enters this the response is in frame 32 where he rquests the http://rapidshare.com.eyu32.ru/images/ssltyles.css in frame 34 he gets the response and next he requests http://rapidshare.com.eyu32.ru/images/images/dot.jpg

![02](/Pictures/Digital Forensics/Network/02.png)

![03](/Pictures/Digital Forensics/Network/03.png)

The response comes in frame 37 as the 404 not found but he has been redirected to http://sploitme.com in `packet 41` which has IP address `192.168.56.52`. Similarly he clicks on some other images like `packet 42` on http://rapidshare.com but every time he gets 404 not found but a redirection to http://sploitme.com. 

![04](/Pictures/Digital Forensics/Network/04.png)

In `packet 57` he clicked on http://sploitme.com.cn/fg/show.php?s=3feb5a6b2f and in reponse to this he gets a text message in `packet 63`. If we look for the Line Based text data we can see the javascript file. By closely looking we can see that it has eval() function which contains a very big string. 

`Eval()` is a vulnerability in http which should not be there. For more details see below.

![05](/Pictures/Digital Forensics/Network/05.png)

![06](/Pictures/Digital Forensics/Network/06.png)

So attack is based on http protocol. (The other method is goto Analyze-> Follow-> HTTP stream)

**2.List IPs and hosts names /domain names. What can you tell about it?**

For host:  Go to `Statistics -> Resolved Address`

For other IPs: Go to `Statistics -> IPv4 Statistics -> Source and Destination Addresses`

![07](/Pictures/Digital Forensics/Network/07.png)

We can tell that the IP address of local machine is `10.0.2.15` and the attacker IP is `192.168.56.52`.

**3.List all the web pages. List those visited containing suspect and possibly malicious Java script and who’c connecting to it.**

Already answered in the solution of Question 1.

**4.Sketch the overview of general actions performed by attacker.**

Already answered in the solution of Question 1.

**5.What actions are performed to slow the analysis down? Provide java script of these actions?**

Paste the line of code containing that eval(CRYPT.obfuscate()) full code. Packet 63

**6.Which OS was targeted by the attacks? Which software? And which vulnerabilities? Could the attack be prevented?**

From `packet 57` lower window it can be seen that the local machine has `Windows NT 5.1` which indicates `Window XP`. Any program that hosts the `WebBrowser ActiveX control` or used the` IE HTML `rendering engine (MSHTML) may be affected by this vulnerability. Mozilla with Active X for Windows XP.

![08](/Pictures/Digital Forensics/Network/08.png)

For more information, please click [here](https://www.kb.cert.org/vuls/id/713878/).

![10](/Pictures/Digital Forensics/Network/10.png)

The below pictures indicates the `Marking name` and corresponding `System version`.

![09](/Pictures/Digital Forensics/Network/09.png)

---

### 8. Mobile Forensics

**Background**:

> PGI Forensics is a data recovery and forensics company that offers data recovery, incident
> response, and forensic services to various commercial institutions and Police forces in the
> EMEA Region. One of their clients, KY Legal, has recently sent a mobile phone to PGI
> Forensics, London office for examination in a case involving smuggling of animals from
> Africa.
> However, all the investigators in the London Office are busy with other cases and as a result,
> a physical image of the phone has been acquired and this has been assigned to you in the
> Sheffield Office.Specifically, the owner of the phone is suspected to be involved (possibly the
> leader of a gang) in smuggling Rhinos from Kenya to the United States and Canada. This
> case is one of several cases that the INTERPOL is investigating on Rhino Smuggling and
> the suspects details has come up in at least three of the investigations.

**Tool**:

`Autopsy` - Old friend good to see you again!

**Analysis**:

**1.What is Josh Hickman's Phone Number?**

For the clue to find this information, we can try to search the SQLite3 database file named `/contacts/contact.db` where the contact information is stored in `Android` file system. 

But in fact, the exact location of the contacts database might depend on the manufactures. While "plain Vanilla Android" has them in `/data/data/android.providers.contacts/databases`, the stock ROM on my *Motorola Milestone 2* e.g. uses `/data/data/com.motorola.blur.providers.contacts/databases/contacts2.db` instead.

In the process of finding the phone number, I located the location of  database file, but I still can't extract the information from it, I find a fix way which requires us to search the key words `Phone Number`, and the result indicates there is a file named `Contacts Artifact` which contains the exact information.

Otherwise, the little tick I would like to supply is the folder which could contain the useful data for answering these questions is named `userdata`.

Another approach is to go to Results->Contacts-> contacts2.db where the Name and phone number is written in the table tab.

![01](/Pictures/Digital Forensics/Mobile Forensics/01.png)

**2.What is make of the phone?**

The idea to solve this question is to find the `log file`s or `XML files` which may contain information about the device and operation system. You can try keyword `hardware` in search engine.

`/img_blk0_mmcblk0.bin/vol_vol52/media/0/Android/data/com.enflick.android.TextNow/cache/log_logcat_com_enflick_android_TextNow_0.log` is the file contains all the system information which also includes `Phone Number` or other device activity records.

Another approach is goto `EXIF Metadata` in results click on it in the Table tab you will get device model and manufacturer information.

![02](/Pictures/Digital Forensics/Mobile Forensics/02.png)

`/img_blk0_mmcblk0.bin/vol_vol52/system/users/0/settings_secure.xml` which contain system and user activities about the sensitive data.

![03](/Pictures/Digital Forensics/Mobile Forensics/03.png)

**3.Identify how many third party apps have been installed on the phone?**

System apps / pre-installed-bloatware-apps are stored in `/system/app` with privileged apps in `/system/priv-app` (which are mounted read-only to prevent any changes). You may also find system apps in `/custpack/app`'s subdirectories.

 Normal apps (three party applications) in internal memory go to `/data/app` to check the details of the applications the user installed.

![04](/Pictures/Digital Forensics/Mobile Forensics/04.png)

**4.List the third Party apps installed.**

Please refer to Q3

**5.What is the name of the Mobile Network Provider?**

Go to `Results-> Messages->` There is a service message from Tracfone which is incoming.

The forensics can find the relevat information from the `Messages` which is under the folder named `result`.

 I emphasize the location to store the messages which is `/vol_vol52/user_de/0/com.android.providers.telephony/databases/telephony.db`. 

![05](/Pictures/Digital Forensics/Mobile Forensics/05.png)

**6.What are the email address of the ownerof the phone?**

You can find the relevant `log file` I mentioned before named `log_logcat_com_enflick_android_TextNow_0.log` to obtain the correct answer.

![06](/Pictures/Digital Forensics/Mobile Forensics/06.png)

Otherwise, you can check the database file named `accounts_de.db` to find the useful information. The location of this file is `/vol_vol52/system_de/0/accounts_de.db`.

Alternate way is to Extract `contacts2.db` and open it in SQLite where accounts->browse data you will get all user accounts he has two email addresses.

![07](/Pictures/Digital Forensics/Mobile Forensics/07.png)

**7.How many messages were sent using Facebook and what were they?**

`Thread2_db` We think.

**8.What is the name of the file that contains the text, "now you can edit and post photos, videos and GIFs ?**

Extract the vedioes from the application. It's name is `e1f012cd75cd41398a300960c1a7f85a.mp4`.

**9.How many images can you find that was sent with WhatsApp?**

Click on Results-> Messages-> Save as CSV file-> Apply Filter in CSV file for Whatsapp and only one file is sent from whatsapp.

The system store the information about the revelent image files which had been sent  in `vol_vol52/system_ce/0/shortcut_service/bitmaps/com.whatsapp	`. We can find information from the under pictures:

![08](/Pictures/Digital Forensics/Mobile Forensics/08.png)

From the `shorcuts` which record the network package which was sent from the target 

![09](/Pictures/Digital Forensics/Mobile Forensics/09.png)

**10.How many messages were sent using WhatsApp?**

From the databases save `msgstore.db` Then in SQLite open this database, right click on Messages and browse table All messages are visible.

As for the `whatsapp` which is regarded as the very safe chat application, it keeps the message in the local database in local instead of server. So the folder where the `whatsapp` store the messages is `/data/data/com.whatsapp/`.  You can find this file by searching the extension of the file from the `result`.

![10](/Pictures/Digital Forensics/Mobile Forensics/10.png)

**11.What are these messages, where are they stored?**

`          vol_vol52/data/com.whatsapp/databases/msgstore.db        `

**12.How many people did the owner of the phone call?**

`Calllog.db` to check all call logs.

You can check all the call history details from the `data/com.android.providers.contacts/databases/contacts2.db`

![11](/Pictures/Digital Forensics/Mobile Forensics/11.png)

**13.How many calls did the owner of the phone have on skype?**

For the full log information, the forensics can access the folder which is `/data/data/com.skype.raider/files/ *user-name*/main.db`. The database named `main.db`contains all the history information.

In practice, I didn't find a database file named `main.db` but we can find the relevant file which may contain history information and log. So I found a file named `offline-storage.data`.

![12](/Pictures/Digital Forensics/Mobile Forensics/12.png)

**14.How many text messages were sent from the phone?**

Most forensic examiners know to look at the MMSSMS.db for SMS/MMS data on almost any device. Android devices typically store this data in the telephony folder here:

` vol_vol52/user_de/0/com.android.providers.telephony/databases/mmssms.db `

![13](/Pictures/Digital Forensics/Mobile Forensics/13.png)

Also you can find the log information from here:

`*/data/data/com.google.android.apps.messaging/databases/bugle_db*`

![14](/Pictures/Digital Forensics/Mobile Forensics/14.png)

**15.How many text messages were received?**

Please refer to Q14.

From the `canonical_address` you can see the each contact's `id` and you can comapre `recipient_id` with the id from `canonical_address`.

![15](/Pictures/Digital Forensics/Mobile Forensics/15.png)

Also you can check `message`

![18](/Pictures/Digital Forensics/Mobile Forensics/18.png)

**16.What is the MSISDN of the owner of the phone?**

`MSISDN` is a number uniquely identifying a subscription in a Global System for Mobile communications or a Universal Mobile Telecommunications System mobile network.

Goto messages first message from Tracfone has MSISDN number 9197580276.

**17.What time was the first message sent on WhatsApp?**

From the `vol_vol52/system_ce/0/recent_images/153_task_thumbnail.png   `, we can decuce the time the suspects used the `WhatsApp`.

![19](/Pictures/Digital Forensics/Mobile Forensics/19.png)

**18.List the evidence(s) that make you to believe that the suspect is involved in Rhino**
**Smuggling.**

No evidence

**19.What locations do you think the suspect visited on the 30th November 2018?**

Go to `EXIF Metadat`a it contains the lat long info for each date.

From the `log_logcat_com_enflick_android_TextNow_0.log	` we can find the useful information which indicate the date which is `2018-11-30`. And we will obtain the `Latitude` and `Longitude` information which confire the location is `North Carolina American`.

![16](/Pictures/Digital Forensics/Mobile Forensics/16.png)

**20.List the wireless networks, the device has been connected to ?**

In the directory `vol_vol52/misc/wifi` , the file including all the wireless information named `wpa_supplicant.conf` can be found.

![17](/Pictures/Digital Forensics/Mobile Forensics/17.png)

**21.What evidence can you use to prove that the suspect visited Kenya?**

No Evidence.

**22.What other countries apart from Kenya has the suspect visited?**

Only `North Carolina`.

You can search the keywords like`Latitude` and `Longitude`, you will know the location the suspect visited by inputing the mentioned keywords.



---

### 9. Icon Network

**Background**:

> Icon networks is a network consulting and security company based in Bristol. The
> organisation provides network installation and security consulting services to businesses
> based in South West England and Wales. 90% of their customers are small businesses who
> often do not have an in house IT team and as such Icon offers IT support, Incident response,
> computer network maintenance and IT management services as well.
> Prism manufacturing, one of Icon networks* long standing customers has contacted your line
> manager that two of their servers has been infected with malware. Your supervisor has
> assigned this task to you.

> Using your knowledge of malware analysis, you are expected to
> 1. Conduct static malware analysis on the file brbbot.exe
> 	a. Provide more information about the static properties of malware such as an
> MD5 hash, file size, file type, targeted operating system.
> 	b. Find out more information about the malware from Virustotal.com
> 2. Conduct Behavioural (host Only) malware analysis on the file brbbot.exe
>       a. Using tools such as RegShot, ProcessMonitor and Processhacker, explain
>     the effect of the malware on the registry and processes
> 3. Conduct Behavioural (Network) malware analysis on the file brbbot.exe
>       a. Using tools such as Wireshark, ApateDNS, REMNux and Fakedns explain
>     the effect of malware on the network.

> Your analysis should provide answers to the following questions
> • What is the MD5 Hash value of the malware?
> • What IP addresses and TCP ports it is trying to connect to?
> • What changes are made to the Registry?
> • What changes are made to the file system?
> • What domain(s) this malware is trying to connect to?
> • What dll files are loaded and run by malware?
> • What files are created?
> • What is the ,php file that malware is looking for on the server?
> • What would have happened if the malware found the .php file on the server?





























