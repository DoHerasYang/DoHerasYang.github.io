---
layout: post
title: 'Digital Forensics'
date: 2019-12-19
author: DoHerasYang
color: rgb(255,210,32)
cover: ''
tags: Lectures

---

# Digital Forensics - Review

> The content of this blog is based on the course CM6016 (Cyber Threat Hunting and Digital Forensics (AUTUMN 2019~20)) of the University of Sheffield.
>
> @All the onowledge rights reserved by the owner of this course's materials and Nesrine Kaaniche at the University of Sheffield.

### 1. Hacking Incident

**Chain of custody**: in legal contexts, is the chronological documentation or paper trail that records the sequence of custody of physical or electronic evidence. It is very essential to maintain the chain of custody to preserve the interity of the evidence and prevent it from the contamination.

The physical and electronic evidence may include:

+ Hard driver (Maybe in the computer or external driver) / portable storage driver / SD card
+ Devices( computer / laptop / mobile phone/ Tablet computer)
+ Floppy disk / Compact disc(CD) 
+ ID card / chest tag
+ The network-access items(Robot / wireless router )



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
> > 2. Create a disk image of the evidence while ensuring that the integrity of the evidence 
> >    is not compromised in any way.
> > 3. Fill out the preliminary evidence examination report.

**Tools**:

`USB_Write_Blocker_All_Windows` is the software to prevent the writing the information to target portable device from the host machine. It's very easy to use, before you plug in the device, you should open this batch file and follow the instruction from the console. 

`MD5` is the hash function which is widely use to produce a 128-bit hash value to verify the integrity of file. In digital forensics, it's very essential to keep the integrity and create




