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

> The content of this blog is based on the course CM6016 (Cyber Threat Hunting and Digital Forensics (AUTUMN 2019~20)) from the University of Sheffield.
>
> **@All the onowledge rights reserved by the owner of this course's materials and Nesrine Kaaniche at the University of Sheffield.**

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

`USB_Write_Blocker_All_Windows` is the software to prevent the writing the information to target portable device from the host machine. It's very easy to use, before you plug in the device, you should open this batch file and follow the instruction from the console. 

`MD5` is the hash function which is widely use to produce a 128-bit hash value to verify the integrity of file. In digital forensics, it's very essential to keep the integrity and creditability of evidence.

`AccessData FTK Imager` is the software to preview and imaging tool used to acquire data (evidence) in a forensically sound manner by creating copies of data without making changes to the original evidence.

**Process and Analyse**:

1)Open the `AccessData FTK` and click `File -> Create Disk Image` and select `Physical Drive` which can allow you to recover more information than others options such as the hidden information.

![01](/Pictures/Digital Forensics/FTK/01.png)

2)Select the targeted device and click `Finish` , we will obtain the new windows. And click the `Add` in the image destination.

![02](/Pictures/Digital Forensics/FTK/02.png)

3)After that we can obtain a new windows which want us to select the type of image destination. `Raw(dd)` is the exact copy of disk, `SMART` is the uncommon option, `E01` is the expert witness formate and has the all raw data from the suspect system and checksum of raw data and encrytion or something like this, `AFF` maybe will not supported anymore. So we select the `Raw`and click `next`.

![03](/Pictures/Digital Forensics/FTK/03.png)

4)The next windows shows the details of the copy, just fix them by yourself or requirements in the exam.

![04](/Pictures/Digital Forensics/FTK/04.png)

5)Next, we will be asked to select the `Image Destination Folder`, and `Image Fragment size` allows us to split up the large file into different size data and sotre them on the other store media. If you want to encrypt the raw data, just tick `Use AD Encryption`. After we have decided the previous information, we can click the `Finish`.

![05](/Pictures/Digital Forensics/FTK/05.png) 

6) We just wait the software to creatw image, after that we will finish our task.

![06](/Pictures/Digital Forensics/FTK/06.png)

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

4.For the **second question**, if we want to locate and recover the `JPG` file we should find the Hex signature of `JPG` file which is `FF D8`. We can locate the beginning of jpg file and also it is very easy to find the end of Hex value.<br>By finishing the searching for Hex signature, you can find the beginning location should be `00009200`.  By scrolling down the Hex file, we can find `pw = goodtimes` which is located at the line of `0000CF20`. Because `50 4B` is the Hex signature for `DOCX PPTX XLSX`, we can konw that `0000CFF0` is the end of `JPG` file. Then, we save the Hex value file as the `JPG` file.

![06](/Pictures/Digital Forensics/Drug Dealer Case/06.jpg)

5.We have recognized that `50 4B` is the Hex value of `XLSX` or `ZIP`file. However the `XLSX`'s Hex value should be more specific which is `50 4B 03 04 14 00 06 00`. We can see the original Hex value is different from that. So we can make sure that We can easily extract the final file by imitating previous steps.<br>`0000D000` is the beginning Hex value of the `ZIP` file and also we can locate the end Hex value of file should be `0000D9FF`. We will obtain the encrypted `XLS` file. And the password we have known is `goodtimes`.

![07](/Pictures/Digital Forensics/Drug Dealer Case/07.png)

6.For **Q6**, The `JPG` file just includes the values for color space, I don't know how to confirm the tools to generate it.



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
>The Security Team Leader has now created a disk image of Frank's laptopj^hich has been assigned to you to analyse. Using `Autopsy` to analyse the evidence.
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

1.What is the name of the company where Frank works?

The thoughts to solve this question is to discover the useful files which could contain the company information. So maybe the email could include the inforamtion like the email signature. Furhetmore, the documents may also include the company information, the `Autospy` have given you the results about all the files which is orderd by `File Types` beneth the `view` directory. You can find a file named `letter head.doc` which you can make sure that the name of company is BoxiPay.

![04](/Pictures/Digital Forensics/Credit Card Fraud/04.png)

2.Where is the location and name of the file where Frank stores his password?

We just follow our normal mind, we may not sotre our password in plaintext, so we tend to find something which can hide the text information. The `media files`, such as `pictures`, `music` and  `vedios`, should come to our mind at first. Meanwhile, we can check whether there is any documents file which provide hint for the location of passwrod. After we checj all the document file, we tend to search the result folder which has collected all the media files. Unfortunately, It seems that Frank is clever than we think. 

The file structure in Windows has one prominent features that each users has their unique forlder in `C:\users`. For the image of Windos system, it keeps this feature and the path should be `vol2\users`. We head down to this repositority and check all the folders such as `Document` and `Music`.  After the carefully searching, we can find our answer is under the folder `Personal Biz`.

![05](/Pictures/Digital Forensics/Credit Card Fraud/05.png)

3.Which operating system and version was Frank's laptop running?

As the Microsoft technical standard, for the older operating system like `Windows NT/2000/XP/2k`, the system information is stored in the file named `boot.ini` which can provide the operating system installed on a particular system partition. This file could show various boot options that are available to user, including the multiple operating systems on the different partitions. The forensics can check the Windows setup logs (eg. `C:\windows\setuplog.txt` `C:\windows\debug\netsetup.log`) which includes can provide useful information.

Considering the newest operating system like `Windows 7/8/10` , the forensics can use the register subkey to find the useful information from the `Registry`. Just query the `SOFTWARE\Microsoft\Windows NT\Current Version` by a standard registry editor such as `regedit`. But it's very difficult to find the exact information about the system from a image without running it.

So I tried to open the Registry to find the information of my host machine's operating system version as shown in below pictures. Although it costs so much time to find the information in a system image, you can still search for the subkey's name to find the cached value which could be hiden in somewhere from the target image file.

![06](/Pictures/Digital Forensics/Credit Card Fraud/06.png)

After I find the name of the operating system value in registry, so try to search the name `ProductName` in Autopsy and we would obtain the answer.

![07](/Pictures/Digital Forensics/Credit Card Fraud/07.png)

4.At which location did Lewis ask to meet Frank?

If you have any information to search, you just need to input the information in `Keyword Search` in Autopsy.

